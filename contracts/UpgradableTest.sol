pragma solidity ^0.4.23;

contract MonsterTokenProxy {

    bytes32 public constant proxyOwnerPosition = keccak256("proxy.owner");
    bytes32 public constant currentVersionAddressPosition = keccak256("current.version");

    constructor (address _currentVersionAddress) public {
        setProxyOwner(msg.sender);
        setCurrentVersionAddress(_currentVersionAddress);
    }

    // Set Upgradability
    function setProxyOwner(address _newProxyOwner) public {
        bytes32 position = proxyOwnerPosition;
        assembly {
            sstore(position, _newProxyOwner)
        }
    }
    function setCurrentVersionAddress(address _newVersionAddress) public {
        bytes32 position = currentVersionAddressPosition;
        assembly {
            sstore(position, _newVersionAddress)
        }
    }
    function getProxyOwner() public view returns(address _owner) {
        bytes32 position = proxyOwnerPosition;
        assembly {
            _owner := sload(position)
        }
    }
    function getCurrentVersionAddress() public view returns(address _currentVersion) {
        bytes32 position = currentVersionAddressPosition;
        assembly {
            _currentVersion := sload(position)
        }
    }

    // fallback function
    function () payable public {
        address currentVersionAddress;
        bytes32 _currentVersionAddressPosition = currentVersionAddressPosition;
        assembly {
            // current contract
            currentVersionAddress := sload(_currentVersionAddressPosition)
        }
        require(currentVersionAddress != address(0));
    
        assembly {
            let ptr := mload(0x40)  // free memory pointer
            calldatacopy(ptr, 0, calldatasize) 
            let result := delegatecall(gas, currentVersionAddress, ptr, calldatasize, 0, 0) 
            let size := returndatasize
            returndatacopy(ptr, 0, size)
        
            switch result
            case 0 { revert(ptr, size) }
            default { return(ptr, size) }
        }
    }
}

contract MonsterToken {
    address public owner;
    uint public n;
    uint32 public n32;
    string public s;
 
    constructor () public {
        owner = msg.sender;
        n = 1;
        n32 = 2;
        s = "komy"; 
    }

    function setN(uint _n) public {
        n = _n;
    }
    function setN32(uint32 _n32) public {
        n32 = _n32;
    }
    function setS(string _s) public {
        s = _s;
    }
}