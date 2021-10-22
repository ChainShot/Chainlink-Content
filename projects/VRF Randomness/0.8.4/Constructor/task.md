## VRF Randomness

To get started using Chainlink VRF, we have to inherit the `VRFConsumerBase.sol`, this contract includes functionality for making the request to get a random number, and having the Chainlink node respond with the random number.

The `VRFConsumerBase` constructor must be called alongside our own constructor, and it takes 2 input parameters:

1. **VRF Coordinator Address**: The address of the VRF Coordinator contract (the contract that is going to verify randomness)
2. **LINK token address**: The address of the LINK token to pay Chainlink oracle gas. 

Then, we want to setup for making our request (in the next stage). To make a request, we will need:

1. **KeyHash**: The unique keyhash that identifies the Chainlink VRF node.
2. **Fee**: The LINK fee that we are going to pay the Chainlink node (in JUELS/WEI). Each node will list how much they charge for their services.

### <emoji id="checkered_flag" /> Your Goal: Complete the Constructor

Pass the Ethereum Mainnet VRF Coordinator and Link Token addresses to the `VRFConsumerBase` constructor. You can find these [addresses here](https://docs.chain.link/docs/vrf-contracts/).

In the constructor, modify both existing storage varaiables: `keyHash` and `fee`. The `keyHash` and LINK fee for the Ethereum Mainnet can be found in the above documentation as well. Keep in mind that LINK is 18 decimals.

> <emoji id="book" /> See the [chainlink documentation](https://docs.chain.link/docs/get-a-random-number/) for any additional information.

