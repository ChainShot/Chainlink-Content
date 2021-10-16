## Request Path 

In this example, there's only value we are trying to retrieve: the average rainfall for the state of Iowa in September 2021. This value is available through [the rainfall API](http://rainfall-oracle.com/), however it is buried inside of a bigger JSON object. We'll need to set a request path to  retrieve the data! 

Let's see a simpler example:

```json
{
    "ETH": {
        "USD": {
            "VOLUME24HOUR": 259610
        }
    }
}
```

<emoji id="point_up" /> To access the volume here, we would need to set a `path` on our request like so:

```solidity
request.add("path", "ETH.USD.VOLUME24HOUR");
```

This sets a path for the `jsonparse` task to use and it needs to be done before the request is sent to the oracle.

## <emoji id="checkered_flag" /> Your Goal: Find the Rainfall

Given the response from the [rainfall API](http://rainfall-oracle.com/): 

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

You'll need to add a similar path to the one shown above, but to parse out the `45720` value from the response. 