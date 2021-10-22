const hre = require('hardhat');
const { assert } = require("chai");

const LINK_ADDR = "0x514910771AF9Ca656af840dff83E8264EcF986CA";
const deployerAddr = "0x148d1FE38e3A0E618d876E23820221d3D0376f60";

describe('Contract', function () {
    let contract, linkToken, addr1;
    let fundingAmount = ethers.utils.parseEther("10");
    // using before to ensure one deployment is important here for
    // a deterministic, hard-coded oracle address in the contract
    before(async () => {
        linkToken = await ethers.getContractAt("LinkTokenInterface", LINK_ADDR);

        // impersonate deployer address to keep the oracle address deterministic 
        await setBalance(deployerAddr, ethers.utils.parseEther("10"));
        const signer = impersonate(deployerAddr);
        const Oracle = await ethers.getContractFactory("Oracle", signer);
        oracle = await Oracle.deploy();
        await oracle.deployed(); // 0x3Aa5ebB10DC797CAC828524e59A333d0A371443c

        const APIConsumer = await ethers.getContractFactory("APIConsumer");
        contract = await APIConsumer.deploy();
        await contract.deployed();

        [addr1] = await ethers.provider.listAccounts();
        await modifyLinkBalance(addr1, fundingAmount);
        await linkToken.transfer(contract.address, fundingAmount);
    });

    it("should have a balance of LINK", async () => {
        const balance = await linkToken.balanceOf(contract.address);
        assert(balance.eq(fundingAmount));
    });

    describe("after making the oracle request", () => {
        let receipt;
        before(async () => {
            const tx = await contract.requestRainfall();
            receipt = await tx.wait();
        });

        it('should have paid the fee to the oracle', async () => {
            const balance = await linkToken.balanceOf(oracle.address);
            const expected = ethers.utils.parseEther(".1");
            assert.equal(balance.toString(), expected.toString());
        });

        it('should have made the request to the oracle', async () => {
            const url = "0x63676574781b687474703a2f2f7261696e66616c6c2d6f7261636c652e636f6d";
            const path = "647061746878257261696e66616c6c732e696f77612e73657074656d6265722e323032312e61766572616765";
            const request = await oracle.request();
            assert(request.indexOf(url) >= 0, "Did not properly parse the rainfall. Your path should start with rainfalls.iowa... and resolve the average.");
            assert(request.endsWith(path), "Did not properly parse the rainfall. Your path should start with rainfalls.iowa... and resolve the average.");
        });
        
        describe("after fulfilling the request", async () => {
            const rainfall = 45720;
            before(async () => {
                const oracleSigner = await impersonate(oracle.address);
                await setBalance(oracle.address, ethers.utils.parseEther("1"));
                const event = receipt.events.find(x => x.event === "ChainlinkRequested");
                await contract.connect(oracleSigner).fulfill(event.args.id, rainfall);
            });

            it("should set the rainfall", async () => {
                const actual = await contract.rainfall();
                assert.equal(actual, rainfall);
            });
        });
    });
});

async function impersonate(addr) {
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [addr],
    });
    return await ethers.provider.getSigner(addr);
}

async function setBalance(addr, balance) {
    await hre.network.provider.request({
        method: "hardhat_setBalance",
        params: [addr, ethers.utils.hexValue(balance)],
    });
}

async function modifyLinkBalance(addr, balance) {
    const storageSlot = ethers.utils.hexZeroPad(1, "32");
    const paddedAddr = ethers.utils.hexZeroPad(addr, "32");
    const slot = ethers.utils.keccak256(paddedAddr + storageSlot.slice(2));
    const paddedBalance = ethers.utils.hexZeroPad(balance, "32");
    await hre.network.provider.request({
        method: "hardhat_setStorageAt",
        params: [LINK_ADDR, slot, paddedBalance],
    });
}
