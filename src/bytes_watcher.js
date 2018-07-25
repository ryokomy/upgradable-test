var Web3 = require('web3');
var contract = require('truffle-contract');
var EventTestContract = require('../build/contracts/EventTest');

let main = async () => {
    var web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:7545"));
    
    const EventTest = contract(EventTestContract);
    EventTest.setProvider(web3.currentProvider);
    EventTest.setNetwork(5777);

    let gasPrice = 3000000000 // 3Gwei for Ganache and Ropsten Tset Network
    let account = web3.eth.accounts[0]
    let gasLimit = 300000

    EventTest.defaults({
        from: account,
        gas: gasLimit,
        gasPrice: gasPrice,
    })

    
    const EventTestInstance = await EventTest.deployed();
    
    var event = EventTestInstance.BytesEvent();
    //イベント監視
    event.watch(function (error, result) {
    console.log('watching "BytesEvent"!');
    if (!error)
        console.log(result);
    });
}

main();

