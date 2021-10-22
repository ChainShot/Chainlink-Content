## Time Capsule

Let's create a time capsule that will allow us to deposit ether and lock it until a designated time. When that time has been reached, we will use Chainlink Keepers to automatically withdraw those funds. 

### <emoji id="checkered_flag" /> Your Goal: Deposit 

First, start by completing the `deposit` function. This function is payable, so by default it will accept ether deposits. 

This function should take the `_lockedUntil` value and store it on the smart contract. This value contains the timestamp the capsule is locked until. Create a storage variable to keep track of this timestamp for later. 

Lastly, after the deposit has been made, require that new deposits cannot be made until the `_lockedUntil` timestamp has been reached. Any attempt to deposit should revert.