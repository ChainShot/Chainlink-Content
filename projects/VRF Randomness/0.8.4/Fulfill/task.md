## Chainlink VRF Fulfillment

Now that the VRF Coordinator has received our randomness request, a Chainlink Node will come along and fulfill that request. When they do, they will need a function to _call our smart contract back at_.

> <emoji id="brain" /> Keep in mind that this fulfillment is a _separate request_ which will start from the Chainlink Oracle! 

### <emoji id="checkered_flag" /> Your Goal: Complete the Callback Function 

Add a public unsigned integer storage variable called `randomResult`. This random result will be the value that the oracle provides us by calling the contract at `fulfillRandomness`.

When the oracle calls this method back store the value in `randomResult`.