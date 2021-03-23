// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

import "./AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);

    event Liquidate();

    function checkLiquidation() external {
        (, int price, , , ) = priceFeed.latestRoundData();

        uint threshold = 1700 * 10 ** priceFeed.decimals();
        if(price < int(threshold)) {
            emit Liquidate();
        }
    }
}