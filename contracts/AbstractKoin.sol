pragma solidity ^0.4.4;

contract Koin {
    function sendCoin(address receiver, uint amount) returns(bool sufficient);
    function getBalance(address addr) returns(uint);
}
