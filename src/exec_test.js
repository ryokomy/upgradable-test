const MonsterToken = artifacts.require('MonsterToken');
const MonsterTokenProxy = artifacts.require('MonsterTokenProxy');

module.exports = async (callback) => {
    // perform actions
    let monsterToken = await MonsterToken.deployed();
    let monsterTokenProxy = await MonsterTokenProxy.deployed();
    //let n = await instance.n();
    console.log(monsterToken.address);
    console.log(monsterTokenProxy.address);

    let proxyOwner = await monsterTokenProxy.getProxyOwner();
    let currentVersion = await monsterTokenProxy.getCurrentVersionAddress();
    console.log(proxyOwner);
    console.log(currentVersion);
};