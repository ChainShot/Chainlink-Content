## Chainlink VRF Fulfillment

Now that the VRF Coordinator has received our randomness request, a Chainlink Node will come along and fulfill that request. When they do, they will need a function to _call our smart contract back at_.

> <emoji id="brain" /> Keep in mind that this fulfillment is a _separate request_ which will start from the Chainlink Oracle! 

### <emoji id="checkered_flag" /> Your Goal: Complete the Callback Function 

Create an `internal override` callback function called `fulfillRandomness` (this is the function the Chainlink node looks for) that takes a `bytes32` and `uint256` as parameters.

Save the random result to a public `uint` named `randomResult`. 