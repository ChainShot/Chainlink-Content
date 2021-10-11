## Choose the ETH / USD Mainnet Data Feed

In our `PriceConsumerV3.sol` contract, we have a `priceFeed` object of the `AggregatorV3Interface`. This is the interface we can use to interact with the Chainlink data feeds contract. However, in order to interact with it, we need an address. 

Typically, we import the `AggregatorV3Interface` with `import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";` if we are in a hardhat, truffle, or brownie project. But for the sake of this demo, we have the contract locally as well. 

### <emoji id="checkered_flag" /> Your Goal: Add the ETH / USD address for Ethereum Mainnet. 

The `priceFeed` variable should be an `AggregatorV3Interface` contract that points to the ETH / USD address on mainnet. You can find all the contract addresses in the [Chainlink documentation](https://docs.chain.link/docs/reference-contracts/). 
