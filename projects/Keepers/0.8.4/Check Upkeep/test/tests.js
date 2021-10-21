const chai = require("chai");
const { assert, expect } = chai;
const { solidity } = require("ethereum-waffle");

chai.use(solidity);

describe('Capsule', function () {
    const secondsLocked = 60 * 60 * 24 * 365;
    const deposit = ethers.utils.parseEther("10");
    const lockDate = Math.floor(Date.now() / 1000) + secondsLocked;
    let contract;
    beforeEach(async () => {
        const Capsule = await ethers.getContractFactory("Capsule");
        contract = await Capsule.deploy();
        await contract.deployed();
        await contract.deposit(lockDate, { value: deposit });
    });

    it("should set the lock date", async () => {
        const actual = await contract.lockedUntil();
        assert.equal(actual, lockDate);
    });

    it("should set the recipient", async () => {
        const actual = await contract.recipient();
        const [expected] = await ethers.provider.listAccounts();
        assert.equal(actual, expected);
    });

    describe("depositing twice before unlocking", () => {
        it("should not be allowed", async () => {
            await expect(contract.deposit(lockDate, { value: deposit })).to.be.reverted;
        });
    });

    describe("after the lockDate", () => {
        beforeEach(async () => {
            await hre.network.provider.request({
                method: "evm_setNextBlockTimestamp",
                params: [lockDate + 1],
            });
            await hre.network.provider.request({
                method: "evm_mine"
            });
        });

        it("should need upkeep", async () => {
            const [upkeepNeeded] = await contract.callStatic.checkUpkeep("0x");
            assert.equal(upkeepNeeded, true);
        });
    });
});