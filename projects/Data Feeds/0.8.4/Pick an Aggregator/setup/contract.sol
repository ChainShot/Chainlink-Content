// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    // ETH USD aggregator on the ETH Mainnet Chain
    AggregatorV3Interface public priceFeed = AggregatorV3Interface();
    
    function getLatestPrice() external view returns (int) {
        
    }
}
