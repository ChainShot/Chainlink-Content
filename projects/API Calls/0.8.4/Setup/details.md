## Tasks/Adapters

Each job that has the following `tasks` or `adapters`. For example, our GET request job could use the following tasks:

1. `httpGet`: The ability to make an HTTP GET API call.
2. `jsonparse`: The ability to parse JSON. This means it can "read" the JSON response of the HTTP GET API response above, and traverse down to `VOLUME24HOUR`.
3. `ethuint256`: The ability to cast the integer response into a `uint256`.
4. `ethtx`: The ability to make a transaction back on-chain.

You can see a full list of tasks / adapters in the [Chainlink documentation](https://docs.chain.link/docs/tasks/). 

You can see the list of tasks of this [job in the marketplace.](https://market.link/jobs/f5357a30-54b7-4a68-b6a8-ae55d4eda987)