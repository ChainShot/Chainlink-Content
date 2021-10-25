## Price Feed Aggregator

In our `PriceConsumerV3.sol` contract, we have a `priceFeed` object of the `AggregatorV3Interface`. This is the interface we can use to interact with the Chainlink data feeds contract. However, in order to interact with it, we need an address. 

> <emoji id="book" /> You can see that here we are importing the `AggregatorV3Interface` to communicate with the `priceFeed`. If you are running a project locally you can also access `chainlink/contracts` by [installing them](https://www.npmjs.com/package/@chainlink/contracts).

### <emoji id="checkered_flag" /> Your Goal: Add the ETH/USD Aggregator

The `priceFeed` variable should be an `AggregatorV3Interface` contract that points to the ETH / USD address on mainnet. You can find all the contract addresses in the [Chainlink documentation](https://docs.chain.link/docs/reference-contracts/). 

> Ignore the `getLatestPrice()` function for now! We will use it in the next stage.