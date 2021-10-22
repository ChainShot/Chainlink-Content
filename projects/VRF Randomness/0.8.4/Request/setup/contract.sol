// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract RandomNumberConsumer is VRFConsumerBase {
    bytes32 public keyHash;
    uint256 public fee;
    
    /**
     * Constructor inherits VRFConsumerBase
     * 
     * Network: Mainnet
     * Chainlink VRF Coordinator address: 0xf0d54349aDdcf704F77AE15b96510dEA15cb7952
     * LINK token address:                0x514910771AF9Ca656af840dff83E8264EcF986CA
     * Key Hash: 0xAA77729D3466CA35AE8D28B3BBAC7CC36A5031EFDC430821C02BC31A238AF445
     */
    constructor() VRFConsumerBase() {
        
    }
    
    function getRandomNumber() public returns (bytes32) {

    }
    
    function fulfillRandomness(bytes32, uint256) internal override {

    }
}