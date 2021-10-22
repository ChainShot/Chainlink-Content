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

    it("should store the ether", async () => {
        const balance = await ethers.provider.getBalance(contract.address);
        assert(deposit.eq(balance));
    });

    describe("depositing twice before unlocking", () => {
        it("should not be allowed", async () => {
            await expect(contract.deposit(lockDate, { value: deposit })).to.be.reverted;
        });
    });
});