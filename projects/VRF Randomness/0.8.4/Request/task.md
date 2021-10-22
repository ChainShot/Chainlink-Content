## Chainlink VRF Request

Great work! Now that we know how to get everything setup, we can work on making a request.

Making a request is a 2 transaction process, the requesting transaction made by us, and the callback (or fulfilling) transaction made by the Chainlink node. 

But remember, we need to fund the contract with LINK before we can make the request! So in essence you can think of it as a 3 transaction process:

1. Fund contract with LINK
2. Make a random number request by calling `requestRandomness` inherited by the `VRFConsumerBase`
3. Wait for the Chainlink node to callback to our `fulfillRandomness` function.

> <emoji id="book" /> We aren't going to send LINK token in our example here, but just know that you'd have to send LINK token to the contract to get a random number. You can follow the [Random Number Tutorial](https://docs.chain.link/docs/intermediates-tutorial/) to see it in action. 

### <emoji id="checkered_flag" /> Your Goal: Create a Request

Modify the `getRandomNumber` method to `requestRandomness` and pass it in the `keyHash` and `fee` for its parameters. This method will return a `bytes32` request ID. Return this value.

> <emoji id="book" /> Take a look at the [Chainlink documentation](https://docs.chain.link/docs/get-a-random-number/) for further details.
