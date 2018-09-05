const MonsterToken = artifacts.require('MonsterToken');
const MonsterTokenProxy = artifacts.require('MonsterTokenProxy');

module.exports = async (callback) => {
    // perform actions
    let monsterToken = await MonsterToken.deployed();
    let monsterTokenProxy = await MonsterTokenProxy.deployed();
    console.log('MonsterToken address: ', monsterToken.address);
    console.log('MonsterTokenProxy address: ', monsterTokenProxy.address);
    let proxyOwner = await monsterTokenProxy.getProxyOwner();
    let currentVersion = await monsterTokenProxy.getCurrentVersionAddress();
    console.log('proxy owner address: ', proxyOwner);
    console.log('current version address: ', currentVersion);
};