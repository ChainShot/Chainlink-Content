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

        it('should find the ETH / USD address', async () => {
            const price = await contract.getLatestPrice();
            let expectedPrice = "178504000000";
            assert(price == expectedPrice);
        });
    });
});