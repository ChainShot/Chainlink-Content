// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract RandomNumberConsumer is VRFConsumerBase {
    bytes32 public keyHash;
    uint256 public fee;
    uint256 public randomResult;
    
    constructor() 
        VRFConsumerBase(
            0xf0d54349aDdcf704F77AE15b96510dEA15cb7952, // VRF Coordinator
            0x514910771AF9Ca656af840dff83E8264EcF986CA  // LINK Token
        ) 
    {
        keyHash = 0xAA77729D3466CA35AE8D28B3BBAC7CC36A5031EFDC430821C02BC31A238AF445;
        fee = 2 * 10 ** 18; 
    }

    function getRandomNumber() public returns (bytes32) {
        return requestRandomness(keyHash, fee);
    }

    function fulfillRandomness(bytes32, uint256 randomness) internal override {
        randomResult = randomness;
    }
}