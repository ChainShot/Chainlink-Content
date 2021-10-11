## Upkeep

For us to make a Keeper Compatible smart contract, we need it to have 2 functions:

1. `checkUpkeep`: Returns a `bool upkeepNeeded, bytes memory performData` where `upkeepNeeded` is `true` if the event has been triggered, and `performData` is optional information to be passed to `performUpkeep`.
2. `performUpkeep`: Executes the action we want to trigger.

We usually import the KeeperCompatibleInterface so we make sure that we don't forget these two functions.

### <emoji id="checkered_flag" /> Your Goal: Make this contract keeper compatible!

See the [chainlink documentation for help.](https://docs.chain.link/docs/chainlink-keepers/compatible-contracts/)

We have a contract that has a `counter` variable that is going to be updated every `interval` blocks. Our Chainlink Keepers are going to trigger an update to counter whenever that interval hits. So we 


1. Add the two functions `checkUpkeep` and `performUpkeep` to make this contract keeper compatible. 
2. `checkUpkeep` should check to see if the current `block.timestamp` minus the `lastTimeStamp` is greater than the interval, and return `true` if yes. 
3. `performUpkeep` should update the `lastTimeStamp` and update the `counter` by 1.



