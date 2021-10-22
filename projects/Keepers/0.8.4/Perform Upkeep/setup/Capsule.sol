// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@chainlink/contracts/src/v0.8/interfaces/KeeperCompatibleInterface.sol";

contract Capsule is KeeperCompatibleInterface {
    function deposit(uint _lockedUntil) external payable {
        
    }

    function checkUpkeep(bytes calldata) external view override returns (bool, bytes memory) {
        
    }

    function performUpkeep(bytes calldata) external override {
        
    }   
}