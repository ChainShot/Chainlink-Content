const { assert } = require("chai");
describe('Contract', function () {
    let contract;
    beforeEach(async () => {
        const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
        contract = await PriceConsumerV3.deploy();
        await contract.deployed();
    });

    it('should get the latest price', async () => {
        const price = await contract.getLatestPrice();
        assert.equal(price.div((10n ** 8n).toString()).toString(), "1785");
    });
});
