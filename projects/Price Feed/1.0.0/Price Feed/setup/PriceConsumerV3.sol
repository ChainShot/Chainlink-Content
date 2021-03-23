// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

import "./AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    // ETH USD aggregator
    AggregatorV3Interface internal priceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);

    event Liquidate();

    function checkLiquidation() external {
        // TODO: emit Liquidate if the ETH price is less than $1700
    }
}