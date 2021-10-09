# Chainlink VRF Introduction

Great work! We now know how to interact with a contract that has had data already requested and then reported back on chain for us.

...But what if we want data that hasn't already been reported? What if we want to request something? 

## The Basic Request Model

This leads us into the [basic request model](https://docs.chain.link/docs/architecture-request-model/) of working with Chainlink Oracles. Features that follow the basic request model (like Chainlink VRF and Chainlink API calls) follow a 2 transaction process.

1. The first transaction makes a request to a Chainlink oracle. The requesting transaction [emits an event](https://ethereum.stackexchange.com/questions/12950/what-are-solidity-events-and-how-they-are-related-to-topics-and-logs) that has data in it including, which Chainlink node it wants data/computation from, what kind of data/computation, and how much Oracle gas (LINK) is being paid.

2. In a 2nd transaction, the Chainlink node/oracle makes it's own transaction populating the contract with the data or output of the computation. 

<br/>
<p align="center">
<img src="./../../img/basic_request.gif" width="500" alt="Basic Request Model">
</p>
<br/>

This means that Chainlink features that follow the request model are asynchronous, and we won't get a response in the same block. This is especially advantageous when working with randomness since we don't want people to be able to cancel transactions if they don't like the random number. 

## LINK token

When making transactions on a layer 1 smart contract platform like Ethereum, we pay a little bit of ETH every time we change the state of the chain. We call this the "transaction gas". In the same regard, when we request and recieve data from a Chainlink oracle, we pay a little bit of LINK token to the Chainlink oracle as "oracle gas". 

This means, that we have to "fund" our contracts with LINK to make these requests, so the Chainlink nodes can continue to operate. 

## Chainlink VRF 

The Chainlink VRF is an example of a Chainlink feature that follows this request model, and we can request a true random number from the service. When we request a random number, their is an on-chain contract that checks the randomness of the number the Chainlink node returns to ensure it's random. 

Now, as we said before, pulling data or computation from a single node is a point of failure and typically we want to avoid doing this. The Chainlink VRF is a bit of an exception, since their is an on-chain contract checking whether or not the number is truly random, so we know it can't be gamed.

You might see a lot of pseudo-randomness methods for getting a random number, like hashing the `block.difficulty` or something. But doing so gives the miners the ability to influence our contracts, and there have been numerous attacks that take advantage of pseudo-randomn methods, so we want to be sure to use true randomness!

Now that you know how valuable Chainlink VRF is and how randomness works on-chain, let's start to implement it!