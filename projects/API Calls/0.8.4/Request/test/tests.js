const hre = require('hardhat');
const { assert } = require("chai");

const LINK_ADDR = "0x514910771AF9Ca656af840dff83E8264EcF986CA";

describe('Contract', function () {
    describe('setup', () => {
        let contract, linkToken, addr1;
        let fundingAmount = ethers.utils.parseEther("10");
        beforeEach(async () => {
            linkToken = await ethers.getContractAt("LinkTokenInterface", LINK_ADDR);

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

        // it('should have a requestId', async () => {
        //     const tx = await contract.requestVolumeData();
        //     await tx.wait(1);
        //     const requestId = tx_receipt.events[0].topics[1];
        //     assert(requestId !== null);
        // });
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
