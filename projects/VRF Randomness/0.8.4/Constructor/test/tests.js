const hre = require('hardhat');
const { assert } = require("chai");

describe('Contract', function () {
    describe('when the price is higher', () => {
        let contract;
        beforeEach(async () => {
            const RandomNumberConsumer = await ethers.getContractFactory("RandomNumberConsumer");
            contract = await RandomNumberConsumer.deploy();
            await contract.deployed();
        });

        it('should have the right fee and keyhash', async () => {
            const fee = await contract.fee();
            const expectedFee = "2000000000000000000";
            assert(fee.eq(expectedFee));
            const keyhash = await contract.keyHash();
            const expectedKeyHash = "0xAA77729D3466CA35AE8D28B3BBAC7CC36A5031EFDC430821C02BC31A238AF445";
            assert(keyhash.toLowerCase() === expectedKeyHash.toLowerCase());
        });
        
        it('should have the right addresses', async () => {
            const bytecode = contract.deployTransaction.data.toLowerCase();
            const expectedVrfCoordinator = ("f0d54349aDdcf704F77AE15b96510dEA15cb7952").toLowerCase();
            const vrfIndex = bytecode.indexOf(expectedVrfCoordinator);
            const expectedLink = ("514910771AF9Ca656af840dff83E8264EcF986CA").toLowerCase();
            const linkIndex = bytecode.indexOf(expectedLink);
            assert.isAtLeast(vrfIndex, 0);
            assert.isAtLeast(linkIndex, 0);
            assert.isAbove(linkIndex, vrfIndex);
        });
    });
});