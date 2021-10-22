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

        it("should have the correct fee", async () => {
            const fee = await contract.fee();
            const expectedFee = ethers.utils.parseEther("2");
            assert(fee.eq(expectedFee), `Did not get the correct fee! It should 2 LINK, you provided: ${fee.toString()}`);
        });

        it('should have the correct keyhash', async () => {
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
            assert(vrfIndex >= 0, "You did not deploy the correct Ethereum Mainnet VRF Coordinator Address.");
            assert(linkIndex >= 0, "You did not deploy the correct LINK Mainnet Token Address.");
            assert(linkIndex > vrfIndex, "It looks like you passed in the VRF Address and Link Token to the constructor in the wrong order.");
        });
    });
});