### <emoji id="checkered_flag" /> Your Goal: Add the requesting function!

See the [chainlink documentation for help.](https://docs.chain.link/docs/make-a-http-get-request/)

We are going to fill out `requestVolumeData`

1. Create an object of type `Chainlink.Request` called `request` that uses the jobId identified in the constructor, returns data to this contract, using the `fulfill` function.
2. Add making an HTTP GET call of `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD` to the request object.
3. Have the `path` of the `jsonparse` task in the request object be `VOLUME24HOUR`.
4. Add a `times` or `multiply` task of `10**18`;
5. Finally, `return sendChainlinkRequestTo(oracle, request, fee)`






