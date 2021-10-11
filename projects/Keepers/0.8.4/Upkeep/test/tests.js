const hre = require('hardhat');
const { assert } = require("chai");

describe('Contract', function () {
    let contract;
    beforeEach(async () => {
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