## Upkeep

2. `performUpkeep`: Executes the action we want to trigger.


### <emoji id="checkered_flag" /> Your Goal: Make this contract keeper compatible!

See the [chainlink documentation for help](https://docs.chain.link/docs/chainlink-keepers/compatible-contracts/).

We have a contract that has a `counter` variable that is going to be updated every `interval` blocks. Our Chainlink Keepers are going to trigger an update to counter whenever that interval hits. So we 

1. Add the two functions `checkUpkeep` and `performUpkeep` to make this contract keeper compatible. 
2. `checkUpkeep` should check to see if the current `block.timestamp` minus the `lastTimestamp` is greater than the interval, and return `true` if yes. 
3. `performUpkeep` should update the `lastTimestamp` and update the `counter` by 1.



