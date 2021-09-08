

### <emoji id="checkered_flag" /> Your Goal: Create a request and callback function for Chainlink VRF

See the [chainlink documentation for help.](https://docs.chain.link/docs/get-a-random-number/)

1. Create a `public` function called `getRandomNumber` that returns a `bytes32 requestId`.
2. Have the function call `requestRandomness` and pass it in the `keyHash` and `fee` for parameters. 
3. Return the `requestId`


4. Create an `internal override` callback function called `fulfillRandomness` (this is the function the Chainlink node looks for) that takes a `bytes32` and `uint256` as parameters.
5. Save the random result to a global public variable named `randomResult`. 



