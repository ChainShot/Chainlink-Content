## The Basic Request Model

Since Chainlink API calls also follow the basic request model, we once again have a requesting function:

```solidity
function requestRainfall() external {}
```

And a callback / returning function:

```solidity
function fulfill(bytes32 _requestId, uint256) 
    public 
    recordChainlinkFulfillment(_requestId) 
{
    volume = _volume;
}
```

### <emoji id="checkered_flag"> Your Goal: GET Request

Build on the `requestRainfall` function by adding in some lines of code to help identify which of the `tasks` we are going to take advantage of. 

For Chainlink API calls, the first thing you'll need to do is create the `request` object:

```solidity
Chainlink.Request memory request = buildChainlinkRequest(<jobId>, <callbackAddress>, <callbackFunctionSelector>);
```

With Chainlink API calls, we choose an address that we want the oracle to reach back out to upon request fulfillment, along with with the function signature we'd like it to call. In this example, use this contract's address as our callback address, and `this.fulfill.selector` as the callbackFunctionSelector. 

Next, tell the node which API to make an HTTP GET call to:

```solidity
request.add("get", <URL>);
```

<emoji id="point_up" /> Here our `URL` will be the url of the rainfall oracle: `http://rainfall-oracle.com/`

        
And finally, [send the request](https://docs.chain.link/docs/chainlink-framework/#sendchainlinkrequestto):

```solidity
sendChainlinkRequestTo(oracle, request, fee);
```
