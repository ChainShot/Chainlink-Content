// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

import "./AggregatorV3Interface.sol";

contract PriceConsumerV3 {
	address ETH_USD = 0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419;
    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(ETH_USD);
    }

    function getLatestPrice() public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();

        return price;
    }
}