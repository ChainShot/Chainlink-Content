// SPDX-License-Identifier: MIT
pragma solidity ^0.6.7;

//import "@chainlink/contracts/src/v0.6/interfaces/KeeperCompatibleInterface.sol";
import "./KeeperCompatibleInterface";

contract Counter is KeeperCompatibleInterface {
    /**
    * Public counter variable
    */
    uint public counter;

    /**
    * Use an interval in seconds and a timestamp to slow execution of Upkeep
    */
    uint public immutable interval;
    uint public lastTimeStamp;
    
    constructor(uint updateInterval) public {
      interval = updateInterval;
      lastTimeStamp = block.timestamp;

      counter = 0;
    }  
}