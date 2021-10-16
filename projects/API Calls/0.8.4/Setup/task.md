## Making API Calls

We can make any httpget, httppost API call with Chainlink. Chainlink API calls follow the basic request model similar to Chainlink VRF. To make an API call, we need the following information.

1. The Chainlink node's oracle contract we want to interact with (yes, we have to choose which node we work with!)
2. The `jobId` of the Chainlink node. 
3. LINK token (for oracle gas)
4. The API that we want to call
5. The data that we want to return from the API call.

For example, take a look at [this rainfall API](http://rainfall-oracle.com/), which returns something like this:

```json
{
    "rainfalls": {
        "iowa": {
            "september": { 
                "2021": {
                    "average": 45720,
                    "unit": "μm"
                }
            }
        }
    }
}
```

Let's say we want that `45720` value. To get it, we would need:

1. A Chainlink Node that can make HTTP GET API calls
2. That Chainlink node's job that can return a `uint256`
3. That Chainlink node's job that will parse the JSON path to `45720`

So there are a few things to think about when choosing a Chainlink oracle. You can find Chainlink oracles from node listing services like [market.link](https://market.link/). 

## <emoji id="checkered_flag" /> Your Goal: Setup 

Let's begin by selecting a Chainlink oracle. For this exercise, use the oracle `0x3Aa5ebB10DC797CAC828524e59A333d0A371443c`. 

Next, set a `jobId`. This particular job will have a set of `tasks` or `adapters`, which you can [learn more about here](?tab=details), For this exercise, use the jobId `d5270d1c311941d0b08bead21fea7747`. 

Each node can set a fee associated with a job. Typically you can see the fee on the [job listing in the marketplace](https://market.link/jobs/f5357a30-54b7-4a68-b6a8-ae55d4eda987). For this exercise, set the fee to be `.1` LINK tokens. 

> <emoji id="face_with_monocle" /> Be careful with your math with the `fee`! Link is a token with [18 decimals](https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca), so this should be taken into account here. 

