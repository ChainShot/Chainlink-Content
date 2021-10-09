// SPDX-License-Identifier: MIT
pragma solidity >=0.7.5;

import "@chainlink/contracts/src/v0.7/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    // ETH USD aggregator on the ETH Mainnet Chain
    AggregatorV3Interface public priceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);


}
