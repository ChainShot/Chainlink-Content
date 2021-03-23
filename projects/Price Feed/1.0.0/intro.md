## Chainlink Price Feed 

The simplest way to interact with Chainlink services is to interact with [Price Feed Aggregators](https://docs.chain.link/docs/using-chainlink-reference-contracts). 

In this exercise, we will **liquidate** if the **ETHUSD** price is below a certain threshold value. This will get us familiar with the Chainlink [AggegratorV3Interface](https://github.com/smartcontractkit/chainlink/blob/master/evm-contracts/src/v0.6/interfaces/AggregatorV3Interface.sol).