## Perform Upkeep

The last Keeper Compatible method we will need to implement is `performUpkeep`. This method will be called by a keeper when our `checkUpkeep` indicates it is time to do so. Unlike `checkUpkeep`, `performUpkeep` will be called as a transaction, therefore it will incur a gas cost on the keeper and charge the capsule in Chainlink tokens.

### <emoji id="checkered_flag" /> Your Goal: Perform Upkeep

The `performUpkeep` should pay out the deposited ether back to the original depositor _only if_ the locked time has been reached. Otherwise, revert.

Once the pay out is complete, the `checkUpkeep` method should no longer indicate that upkeep is needed (the `bool` return value should be `false`).

> <emoji id="thinking_face" /> You will need to keep track of the original depositor in the `deposit` method in order to pay them out in `performUpkeep`.

