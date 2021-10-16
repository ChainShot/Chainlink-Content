// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract APIConsumer is ChainlinkClient {
    using Chainlink for Chainlink.Request;
  
    uint256 public rainfall;
    
    address public oracle;
    bytes32 public jobId;
    uint256 public fee;
    
    constructor() {
        
    }
}