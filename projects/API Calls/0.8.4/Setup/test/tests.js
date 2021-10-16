const hre = require('hardhat');
const { assert } = require("chai");

describe('Contract', function () {
    let contract;
    before(async () => {
        const APIConsumer = await ethers.getContractFactory("APIConsumer");
        contract = await APIConsumer.deploy();
        await contract.deployed();
    });

    it("should set the oracle address", async () => {
        const oracle = await contract.oracle();
        assert.equal(oracle, "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c");
    });

    it("should set the job ID", async () => {
        const jobId = ethers.utils.toUtf8String(await contract.jobId());
        assert.equal(jobId, "d5270d1c311941d0b08bead21fea7747");
    });

    it("should set the fee", async () => {
        const fee = await contract.fee();
        assert.equal(fee.toString(), ethers.utils.parseEther("0.1").toString());
    });
});
