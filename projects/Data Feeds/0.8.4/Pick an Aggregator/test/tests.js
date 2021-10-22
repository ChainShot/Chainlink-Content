const hre = require('hardhat');
const { assert } = require("chai");

describe('Contract', function () {
    let contract;
    beforeEach(async () => {
        const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
        contract = await PriceConsumerV3.deploy();
        await contract.deployed();
    });

    it('should find the ETH / USD address', async () => {
        const ethUsdAddress = await contract.priceFeed();
        let expectedAddress = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
        assert(ethUsdAddress === expectedAddress, "The Price Feed was not the expected address! Find the Ethereum Mainnet ETH/USD Price Feed.");
    });
});