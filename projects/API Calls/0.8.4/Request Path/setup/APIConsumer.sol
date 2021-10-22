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
        // this sets the stored address for the LINK token based on the 
        // public network that the contract is deployed on
        // (no need to change anything here)
        setPublicChainlinkToken();
        
        // TODO: set the oracle, jobId, and fee
    }
    
    function requestRainfall() external {
        
    }
    
    function fulfill(bytes32 _requestId, uint256) public recordChainlinkFulfillment(_requestId) {
        
    }
}