const hre = require('hardhat');
const { assert } = require("chai");

describe('Contract', function () {
    describe('setup', () => {
        let contract, linkToken, fundAmount;
        beforeEach(async () => {
            const LinkToken = await ethers.getContractFactory("LinkToken");
            const APIConsumer = await ethers.getContractFactory("APIConsumer");
            contract = await APIConsumer.deploy();
            linkToken = await LinkToken.deploy()
            await contract.deployed();
            fundAmount = 1000000000000000000;
        });

        it('should have a requestId', async () => {
            const fundingTx = await linkToken.transfer(contract.address, fundAmount);
            await fundingTx.wait(1)
            const tx = await contract.requestVolumeData();
            await tx.wait(1);
            const requestId = tx_receipt.events[0].topics[1];
            assert(requestId !== null);
        });
    });

});
