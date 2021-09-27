const hre = require('hardhat');
const { assert } = require("chai");

describe('Contract', function () {
    describe('setup', () => {
        let contract;
        beforeEach(async () => {
            await forkFrom(12086400);
            const Counter = await ethers.getContractFactory("Counter");
            contract = await Counter.deploy(2000);
            await contract.deployed();
        });

        it('should have checkup return true and perform upkeep update counters', async () => {
            const tuple = await contract.functions.checkUpkeep("");
            assert(tuple[0] == true);

            assert(await contract.counter() == 0)
            const tx = await contract.performUpkeep("")
            tx.wait(1)
            assert(await contract.counter() == 1)
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
