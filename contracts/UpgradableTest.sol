pragma solidity ^0.4.23;

contract A {
    uint public n;
    address public owner;

    B public bInterface;

    constructor (address _b) public {
        owner = _b;
        bInterface = B(_b);
    }

    function delegatecallSetN(address _b, uint _n) public {
        _b.delegatecall(bytes4(keccak256("setN(uint256)")), _n);
    }
    function callSetN(uint _n) public {
        bInterface.setN(_n);
    }
}

contract B {
    uint public n;
    address public owner;
 
    constructor () public {
        owner = msg.sender;
    }

    function setN(uint _n) public {
        n = _n;
    }
}