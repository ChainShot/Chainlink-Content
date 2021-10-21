## Check Upkeep

Now comes the first of the Keeper Compatible methods, `checkUpkeep`! This is a method that Chainlink expects every Chainlink Keeper to implement. You must implement it in order to be Keeper Compatible. 

The method `checkUpkeep` will be called by a keeper as a query to see whether or not your contract requires upkeep. In this case, our contract requires upkeep if the funds are ready to be withdrawn. Once they are ready, this method should return true! 

> <emoji id="face_with_monocle"/> Notice we are inheriting from the `KeeperCompatibleInterface` so we make sure that we don't forget to implement the keeper compatible functions!

### <emoji id="checkered_flag" /> Your Goal: Check Upkeep

This method will periodically be called by the Chainlink Keeper. Your goal is to indicate when the funds are ready to be withdrawn. Return `true` when the `_lockedUntil` timestamp has been reached and not before then. 

The `bool` indicating whether or not the contract requires upkeep will be the first return value. The second return value (`bytes memory`) allows us to specify more information we'd like to send to the `performUpkeep` method later. For our use case, this is not necessary. You can return `"0x"` for this value.

> <emoji id="book" /> Be sure to check out the [chainlink documentation](https://docs.chain.link/docs/chainlink-keepers/compatible-contracts/) for more information on keeper contracts.