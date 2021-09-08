const hre = require('hardhat');
const { assert } = require("chai");

describe('Contract', function () {
    describe('when the price is higher', () => {
        let contract;
        beforeEach(async () => {
            await forkFrom(12086400);
            const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
            contract = await PriceConsumerV3.deploy();
            await contract.deployed();
        });

        it('should find the ETH / USD address', async () => {
            const ethUsdAddress = await contract.priceFeed();
            let expectedAddress = "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"
            assert(ethUsdAddress == expectedAddress)
            // const event = receipt.events.find(x => x.event === "Liquidate");
            // assert(!event, "expected Liquidate to not be emitted");
        });
    });


    // describe('when the price is lower', () => {
    //     let contract;
    //     beforeEach(async () => {
    //         await forkFrom(11987035);
    //         const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
    //         contract = await PriceConsumerV3.deploy();
    //         await contract.deployed();
    //     });

    //     it('should liquidate', async () => {
    //         const tx = await contract.checkLiquidation();
    //         const receipt = await tx.wait();
    //         const event = receipt.events.find(x => x.event === "Liquidate");
    //         assert(event, "expected Liquidate to be emitted");
    //     });
    // });
});

async function forkFrom(blockNumber) {
    const jsonRpcUrl = hre.config.networks.hardhat.forking.url;
    await hre.network.provider.request({
        method: "hardhat_reset",
        params: [{ forking: { jsonRpcUrl, blockNumber } }],
    });
};
