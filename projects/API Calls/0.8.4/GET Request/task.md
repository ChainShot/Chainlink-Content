
# The basic Request Model

Since Chainlink API calls also follow the basic request model, we once again have a requesting function:

```solidity
function requestVolumeData() public returns (bytes32 requestId) 
    {
        // Start here!
    }
```

And a callback / returning function:

```solidity
function fulfill(bytes32 _requestId, uint256 _volume) public recordChainlinkFulfillment(_requestId)
    {
        volume = _volume;
    }
```

Our requesting function is what we are going to fill in, and our fulfillment function is already all done!

Similar to the Chainlink VRF, it takes a `bytes32 _requestId` which identifies the request Id that we make above, and a `uint256 _volume` which will be the return data from the API call. 

Once again, since we are requesting data, we are going to have to fund out contract with LINK for it to pay the oracle gas. 

## Creating our `requestVolumeData` function

We are going to create our `requestVolumeData` function by adding in some lines of code to help identify which of the `tasks` we are going to take advantage of. For Chainlink API calls, the first thing we need to do is make the `request` object.

```solidity
Chainlink.Request memory request = buildChainlinkRequest(<jobId>, <callbackAddress>, <callbackFunctionSelector>);
```

With Chainlink API calls, we choose an address that we want to return data too, along with which function we want to return to. In our example, we are going to use `address(this)` as our callback address, and `this.fulfill.selector` as our callbackFunctionSelector. 

Then, we can tell our node what API to make an HTTP GET call to with:

```solidity
request.add("get", <URL>);
```

Then, we choose which value in the json response by picking a `path` for the `jsonparse` to use, for example:
```solidity
request.add("path", "RAW.ETH.USD.VOLUME24HOUR");
```
        
Then we can multiply:
```solidity
int timesAmount = 10**18;
request.addInt("times", timesAmount);
```
        
And finally, we send the request:
```solidity
return sendChainlinkRequestTo(oracle, request, fee);
```

Ok! There is a LOT of information here! Let's see you fill in that requesting function!

### <emoji id="checkered_flag" /> Your Goal: Add the requesting function!

See the [chainlink documentation for help.](https://docs.chain.link/docs/make-a-http-get-request/)

We are going to fill out `requestVolumeData`

1. Create an object of type `Chainlink.Request` called `request` that uses the jobId identified in the constructor, returns data to this contract, using the `fulfill` function.
2. Add making an HTTP GET call of `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD` to the request object.
3. Have the `path` of the `jsonparse` task in the request object be `VOLUME24HOUR`.
4. Add a `times` or `multiply` task of `10**18`;
5. Finally, `return sendChainlinkRequestTo(oracle, request, fee)`