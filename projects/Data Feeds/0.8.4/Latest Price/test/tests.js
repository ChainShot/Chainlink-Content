const hre = require('hardhat');
const { assert } = require("chai");

describe('Contract', function () {
    describe('when the price is higher', () => {
        let contract;
        beforeEach(async () => {
            const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
            contract = await PriceConsumerV3.deploy();
            await contract.deployed();
        });

        it('should retrieve the latest ETH/USD price', async () => {
            const price = await contract.getLatestPrice();
            assert(price.eq("178504000000"), "Did not receive the expected price from the PriceConsumer! Did you call priceFeed.latestRoundData?");
        });
    });
});