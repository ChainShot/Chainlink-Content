const hre = require('hardhat');
const { assert } = require("chai");

describe('Contract', function () {
    let contract;
    beforeEach(async () => {
        const Counter = await ethers.getContractFactory("Counter");
        contract = await Counter.deploy(2000);
        await contract.deployed();
    });

    describe("after the interval", () => {
        beforeEach(async () => {
            await hre.network.provider.request({
                method: "evm_increaseTime",
                params: [2001],
            });
            await hre.network.provider.request({
                method: "evm_mine"
            });
        });

        it("should need upkeep", async () => {
            const tuple = await contract.callStatic.checkUpkeep("0x");
            assert.equal(tuple.upkeepNeeded, true);
        });

        it('should perform upkeep update counters', async () => {
            assert.equal((await contract.counter()).toNumber(), 0);
            await contract.performUpkeep("0x");
            assert.equal((await contract.counter()).toNumber(), 1);
        });
    });
});