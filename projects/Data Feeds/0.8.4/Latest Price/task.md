## Getting the latest price

Now that we can interact with the contract, all we have to do is call the `latestRoundData` function. Let's call that so that our contract can report the latest price of Ethereum in terms of USD.

### <emoji id="checkered_flag" /> Your Goal: Get the latest price function

Complete the `getLatestPrice` function to get the latest price of ETH/USD. 

There is method available on the priceFeed called `latestRoundData` which will return a tuple with five values in it: 

```solidity
(uint80 roundID, 
int price, // <-- this is the one we want to return
uint startedAt,
uint timeStamp,
uint80 answeredInRound)
```

> <emoji id="book" /> If you get stuck, check out the [Chainlink documentation for reference](https://docs.chain.link/docs/get-the-latest-price/).

