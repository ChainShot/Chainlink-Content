## Awesome! 

Yes adding the functions is as simple as doing the following: 

```solidity
function getRandomNumber() public returns (bytes32 requestId) {
    return requestRandomness(keyHash, fee);
}

/**
    * Callback function used by VRF Coordinator
    */
function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
    randomResult = randomness;
}
```

Amazing work! You now know how to get random numbers into your smart contracts, let's move on and learn how to make decentralized event driven triggers...