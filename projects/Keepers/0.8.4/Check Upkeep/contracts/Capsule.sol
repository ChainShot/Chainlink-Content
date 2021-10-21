// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@chainlink/contracts/src/v0.8/interfaces/KeeperCompatibleInterface.sol";

contract Capsule is KeeperCompatibleInterface {
    uint lockedUntil;

    function deposit(uint _lockedUntil) external payable {
        require(lockedUntil == 0);
        lockedUntil = _lockedUntil;
    }

    function checkUpkeep(bytes calldata) external view override returns (bool, bytes memory) {
        bool upkeepNeeded = lockedUntil > 0 && block.timestamp > lockedUntil;
        return (upkeepNeeded, "0x");
    }

    function performUpkeep(bytes calldata) external override {
        
    }   
}