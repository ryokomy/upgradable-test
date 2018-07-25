pragma solidity ^0.4.23;

contract EventTest {
    uint public n = 3;
    bytes public data = "1";
    address public owner;

    event UintEvent(uint _n);
    event BytesEvent(bytes _data);
    event StringEvent(string s);

    constructor () public {
        owner = msg.sender;
    }

    function set(uint _n) public {
        n = msg.data.length;
        emit UintEvent(n);
    }

    function setData(bytes _data) public {
        string memory s = new string(data.length);
        s = string(data);
        emit BytesEvent(data);
        emit StringEvent(s);
        emit UintEvent(data.length);


        data = msg.data;
        s = new string(data.length);
        s = string(data);
        emit BytesEvent(data);
        emit StringEvent(string(data));
        emit UintEvent(data.length);


        data = _data;
        s = new string(data.length);
        s = string(data);
        emit BytesEvent(data);
        emit StringEvent(string(data));
        emit UintEvent(data.length);
    }
}
