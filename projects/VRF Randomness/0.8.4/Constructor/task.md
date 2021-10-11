## VRF Randomness

We've gone ahead and got you started here. Typically, you'd import from `import "@chainlink/contracts/src/v0.7/VRFConsumerBase.sol";`, but we've added all the contracts to our project here. 

To get started using Chainlink VRF, we have to inherit the `VRFConsumerBase.sol`, this contract includes functionality for making the request to get a random number, and having the Chainlink node respond with the random number.

We have to inherit this contract, and use the `VRFConsumerBase` constructor alongside our constructor, and it takes 2 input parameters:

1. VRF Coordinator Address: The address of the VRF Coordinator contract (the contract that is going to verify randomness)
2. LINK token address: The address of the LINK token to pay Chainlink oracle gas. 

Then, we want to setup for making our request (in the next stage). To make a request, we will need:

1. KeyHash: The unique keyhash that identifies the Chainlink VRF node.
2. Fee: The LINK fee that we are going to pay the Chainlink node (in JUELS/WEI). Each node will list how much they charge for their services.

### <emoji id="checkered_flag" /> Your Goal: Create a constructor that uses Chainlink VRF on Mainnet, and add the keyhash and fee global public variables.

See the [chainlink documentation for help.](https://docs.chain.link/docs/get-a-random-number/)

1. Create a contract that inherits `VRFConsumerBase`, and in the `VRFConsumerBase` constructor that takes the mainnet VRF Coordinator and LINK token as inputs. 
2. Create public variables `bytes32 keyHash` and `uint256 fee` that are associated with the Mainnet Chainlink VRF node. 


