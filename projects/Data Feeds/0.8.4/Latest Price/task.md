## Getting the latest price

Now that we can interact with the contract, all we have to do is call the `latestRoundData` function. Let's call that so that our contract can report the latest price of Ethereum in terms of USD.

### <emoji id="checkered_flag" /> Your Goal: Get the latest price function

Create a `public view` function that returns an `int` and calls the `getLatestPrice` function on the price feed contract.

If you get stuck, check out the [Chainlink documentation for reference](https://docs.chain.link/docs/get-the-latest-price/).

