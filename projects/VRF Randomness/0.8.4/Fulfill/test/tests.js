const hre = require('hardhat');
const { assert } = require("chai");
const vrfCoordinatorABI = require("@chainlink/contracts/abi/v0.6/VRFCoordinator.json");

const LINK_ADDR = "0x514910771AF9Ca656af840dff83E8264EcF986CA";
const VRF_ADDR = "0xf0d54349aDdcf704F77AE15b96510dEA15cb7952";

describe('Contract', function () {
    let contract, linkToken, addr1;
    let fundingAmount = ethers.utils.parseEther("10");
    beforeEach(async () => {
        linkToken = await ethers.getContractAt("LinkTokenInterface", LINK_ADDR);

        const RandomNumberConsumer = await ethers.getContractFactory("RandomNumberConsumer");
        contract = await RandomNumberConsumer.deploy();
        await contract.deployed();

        [addr1] = await ethers.provider.listAccounts();
        await modifyLinkBalance(addr1, fundingAmount);
        await linkToken.transfer(contract.address, fundingAmount);
    });

    it("should have a balance of LINK", async () => {
        const balance = await linkToken.balanceOf(contract.address);
        assert(balance.eq(fundingAmount));
    });

    describe("after requesting a random number", () => {
        let receipt, requestId, randomnessRequestEvent;
        beforeEach(async () => {
            const tx = await contract.getRandomNumber();
            receipt = await tx.wait();
            const interface = new ethers.utils.Interface(vrfCoordinatorABI);
            const events = receipt.logs.filter(x => x.address === VRF_ADDR).map(x => interface.parseLog(x));
            randomnessRequestEvent = events.find(x => x.name === "RandomnessRequest");
            requestId = randomnessRequestEvent.args.requestID;
        });

        it('should create the randomness request in the coordinator', async () => {
            assert(randomnessRequestEvent);
            assert.equal(randomnessRequestEvent.args.sender, contract.address);
        });

        describe("after fulfilling the request", () => {
            const randomValue = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
            beforeEach(async () => {
                // give gas money to the VRF coordinator 
                await network.provider.send("hardhat_setBalance", [
                    VRF_ADDR,
                    "0xde0b6b3a7640000"
                ]);
                // impersonate the VRF coordinator to fullfill randomness 
                await hre.network.provider.request({
                    method: "hardhat_impersonateAccount",
                    params: [VRF_ADDR],
                });
                const signer = await ethers.provider.getSigner(VRF_ADDR);
                await contract.connect(signer).rawFulfillRandomness(requestId, randomValue);
            });

            it("should store the randomness", async () => {
                const randomResult = await contract.randomResult();
                assert(randomResult.eq(randomValue));
            });
        });
    });
});

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
