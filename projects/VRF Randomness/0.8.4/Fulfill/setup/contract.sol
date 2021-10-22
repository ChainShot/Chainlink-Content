// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract RandomNumberConsumer is VRFConsumerBase {
    bytes32 public keyHash;
    uint256 public fee;
    
    constructor() VRFConsumerBase(
        
    ) {
        
    }
    
    function getRandomNumber() public returns (bytes32) {

    }
    
    function fulfillRandomness(bytes32, uint256) internal override {

    }
}