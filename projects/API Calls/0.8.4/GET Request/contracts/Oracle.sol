// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Oracle {
    bytes public request;

    function oracleRequest(address,uint256,bytes32,address,bytes4,uint256,uint256,bytes calldata data) external {
        request = data;
    }

    function onTokenTransfer(address,uint,bytes calldata data) external {
        address(this).call(data);
    }
}
