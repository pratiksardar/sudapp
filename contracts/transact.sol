// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract TxRecords {
    uint256 txCount;

    event TxEvent(address indexed fromAddr, address indexed toAddr, uint256 amt, string msgTxt, uint256 time, string tag);
  
    struct TxStruct {
        address fromAddr;
        address toAddr;
        uint256 amt;
        string msgTxt;
        uint256 time;
        string tag;
    }

    TxStruct[] txList;

    function recordTx(address payable toAddr, uint256 amt, string memory msgTxt, string memory tag) public {
        txCount += 1;
        txList.push(TxStruct(msg.sender, toAddr, amt, msgTxt, block.timestamp, tag));

        emit TxEvent(msg.sender, toAddr, amt, msgTxt, block.timestamp, tag);
    }

    function fetchAllTxs() public view returns (TxStruct[] memory) {
        return txList;
    }

    function fetchTxCount() public view returns (uint256) {
        return txCount;
    }
}
