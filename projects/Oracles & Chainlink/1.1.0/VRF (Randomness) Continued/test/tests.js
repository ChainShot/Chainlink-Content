const hre = require('hardhat');
const { assert } = require("chai");

describe('Contract', function () {
    describe('setup', () => {
        let contract, linkToken, fundAmount;
        beforeEach(async () => {
            const LinkToken = await ethers.getContractFactory("LinkToken");
            const RandomNumberConsumer = await ethers.getContractFactory("RandomNumberConsumer");
            contract = await RandomNumberConsumer.deploy();
            linkToken = await LinkToken.deploy()
            await contract.deployed();
            fundAmount = 1000000000000000000;
        });

        it('should be able to request a random number from a Chainlink VRF node', async () => {
            const fundTx = await linkToken.transfer(contract.address, fundAmount)
            await fundTx.wait(1)
            const requestingTx = await contract.fee();
            const expectedFee = "2000000000000000000";
            assert(fee == expectedFee);
            const keyhash = await contract.keyHash();
            const expectedKeyHash = "0xAA77729D3466CA35AE8D28B3BBAC7CC36A5031EFDC430821C02BC31A238AF445";
            assert(keyhash == expectedKeyHash);
            const requestingTx = await contract.getRandomNumber();
            const requestId = requestingTx.events[2].topics[1]
            assert(requestId !== null);
        });
        // We aren't going to test for fulfillRandomness
        // We aren't mocking here... but perhaps we should...
    });

});
