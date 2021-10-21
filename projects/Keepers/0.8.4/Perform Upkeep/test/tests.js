const chai = require("chai");
const { assert, expect } = chai;
const { solidity } = require("ethereum-waffle");

chai.use(solidity);

describe('Capsule', function () {
    const secondsLocked = 60 * 60 * 24 * 365;
    const deposit = ethers.utils.parseEther("10");
    const lockDate = Math.floor(Date.now() / 1000) + secondsLocked;
    let contract, account1;
    beforeEach(async () => {
        const Capsule = await ethers.getContractFactory("Capsule");
        contract = await Capsule.deploy();
        await contract.deployed();
        await contract.deposit(lockDate, { value: deposit });
        [account1] = await ethers.provider.listAccounts(); 
    });

    it("should store the ether", async () => {
        const balance = await ethers.provider.getBalance(contract.address);
        assert(deposit.eq(balance));
    });

    it("should not allow upkeep", async () => {
        await expect(contract.performUpkeep("0x")).to.be.reverted;
    });

    describe("depositing twice before unlocking", () => {
        it("should not be allowed", async () => {
            await expect(contract.deposit(lockDate, { value: deposit })).to.be.reverted;
        });
    });

    describe("after the lockDate", () => {
        let i = 1;
        beforeEach(async () => {
            await hre.network.provider.request({
                method: "evm_setNextBlockTimestamp",
                params: [lockDate + i],
            });
            i+=10;
            await hre.network.provider.request({
                method: "evm_mine"
            });
        });

        it("should need upkeep", async () => {
            const [upkeepNeeded] = await contract.callStatic.checkUpkeep("0x");
            assert.equal(upkeepNeeded, true);
        });

        describe("after performing upkeep", () => {
            let beforeBalance;
            beforeEach(async () => {
                beforeBalance = await ethers.provider.getBalance(account1);
                const signer1 = await ethers.provider.getSigner(1);
                await contract.connect(signer1).performUpkeep("0x");
            });

            it("should send the ether back to the recipient", async () => {
                const afterBalance = await ethers.provider.getBalance(account1);
                assert(afterBalance.sub(beforeBalance).eq(deposit));
            });

            it("should no longer require upkeep", async () => {
                const [upkeepNeeded] = await contract.callStatic.checkUpkeep("0x");
                assert.equal(upkeepNeeded, false);
            });
        });
    });
});