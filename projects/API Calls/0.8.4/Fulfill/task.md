## Fullfill

After you have made your request to a Chainlink node, on a future, **completely separate transaction** that request will eventually be fulfilled. When it does, your callback function will be invoked. This is the one that you specified in the `buildChainlinkRequest` method. 

### <emoji id="checkered_flag" /> Your Goal: Set the Rainfall

The second argument passed to your `fulfill` method will be the rainfall you requested from the oracle through the rainfall API! 

Go ahead, take this argument, and store it inside of the public `rainfall` storage variable. 