# Chainlink API Calls

## Introduction

As this is the most advanced feature of working with Chainlink oracles, but also the least used, we are going to move quickly through this section. 

If you want a more end-to-end breakdown, be sure to check out the [Advanced Tutorial](https://docs.chain.link/docs/advanced-tutorial/) for making API calls. 

The reason this is used the least is that it requires the most work to put into a decentralized context. Chainlink Keepers is decentralized. Data feeds are already decentralized. Chainlink VRF is cryptographically ensured.

But Chainlink API Calls, you have to do the work to make it decentralized, since this will show you how to connect with 1 node and pull from 1 data source.

However, if you master this skill, this is what enables you to have your smart contracts have unlimited customization.

You want some obscure data? Like number of dogs in Canada? You could use this feature to get the data.

Maybe you want the temperature in France? Boom. Use this feature.

You want to have your artificial intelligence bot buy a car from your bank account? Yes, even that can be done with this. 

Chainlink API calls are the customization layer of whatever smart contract application you use. You'll just want to keep in mind the decentrality trade-offs. You can 100% use centralized APIs and nodes, but just need to remember this means your application has a centralization vector. 

We have seen projects use these features and go on to be very successful though, so let's learn!