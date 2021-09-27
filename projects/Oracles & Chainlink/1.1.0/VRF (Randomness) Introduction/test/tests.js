const hre = require('hardhat');
const { assert } = require("chai");

describe('Contract', function () {
    describe('when the price is higher', () => {
        let contract;
        beforeEach(async () => {
            await forkFrom(12086400);
            const RandomNumberConsumer = await ethers.getContractFactory("RandomNumberConsumer");
            contract = await RandomNumberConsumer.deploy();
            await contract.deployed();
        });

        it('should have the right fee and keyhash', async () => {
            const fee = await contract.fee();
            const expectedFee = "2000000000000000000";
            assert(fee == expectedFee);
            const keyhash = await contract.keyHash();
            const expectedKeyHash = "0xAA77729D3466CA35AE8D28B3BBAC7CC36A5031EFDC430821C02BC31A238AF445";
            assert(keyhash == expectedKeyHash);
        });
        it('should have the right addresses', async () => {
            const vrfCoordinator = await contract.vrfCoordinator();
            const expectedVrfCoordinator = "0xf0d54349aDdcf704F77AE15b96510dEA15cb7952";
            assert(vrfCoordinator == expectedVrfCoordinator);
            const link = await contract.LINK();
            const expectedLink = "0x514910771AF9Ca656af840dff83E8264EcF986CA";
            assert(link == expectedLink);
        });
    });

});

async function forkFrom(blockNumber) {
    const jsonRpcUrl = hre.config.networks.hardhat.forking.url;
    await hre.network.provider.request({
        method: "hardhat_reset",
        params: [{ forking: { jsonRpcUrl, blockNumber } }],
    });
};
