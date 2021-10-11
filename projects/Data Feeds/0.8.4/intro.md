# Chainlink Data Feeds

Now that we know a little more about Chainlink & Oracles, let's look at how we can start getting data and computation into our smart contracts and turn them into hybrid smart contracts! (with the same advantages that blockchain offers us)

## About Chainlink Data Feeds

[Chainlink Data Feeds](https://docs.chain.link/docs/using-chainlink-reference-contracts/) are a way to get data that has already been aggregated by a network of Chainlink oracles. 

<br/>
<p align="center">
<img src="./../../img/chainlink_feeds.png" width="500" alt="Chainlink Data Feeds">
</p>
<br/>

Heading over to [data.chain.link](https://data.chain.link/) we can see a visualization of everything the data feeds have to offer, including:

1. What are some sample data feeds (like ETH/USD, BTC/DAI, etc)
2. What are the node operators on the Chainlink network
3. What are the update parameters
4. And who are the protocols sponsoring each data feed

<br/>
<p align="center">
<img src="./../../img/data_chain_link.png" width="500" alt="Chainlink Data Feeds">
</p>
<br/>

Right now, data feeds are sponsored by a group of protocols using the tools. They sponsor collecting the data so that anyone in the community can read from the data feeds! You can learn more about the payment models from this [stack exchange question.](https://ethereum.stackexchange.com/questions/87473/is-chainlinks-price-reference-data-free-to-consume)

All we have to do to read one of these data fees and consume the data into our own contracts is to:

1. Import the AggregatorV3Interface
2. Choose the address of the data feed contract
3. Call `latestRoundData` on the contract

The data comes already aggregated, placed on chain, and ready to consume!

## Choosing a data feed

In order to use a data feed, you need the address of that data feed. Each blockchain and data pair will have a different address. You can find a list of all addresses in the [Chainlink contract addresses documentation](https://docs.chain.link/docs/reference-contracts/).

You can alternatively use the [Feeds Registry](https://docs.chain.link/docs/feed-registry/) once you learn the basic method. 

Let's get started just picking a data feed. 

If you want to try this all out in remix when you're done, you can follow along the [Chainlink basics tutorial](https://docs.chain.link/docs/beginners-tutorial/) as well. 