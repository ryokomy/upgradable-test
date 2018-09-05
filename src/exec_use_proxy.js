const MonsterToken = artifacts.require('MonsterToken');
const MonsterTokenProxy = artifacts.require('MonsterTokenProxy');

module.exports = async (callback) => {
    // access MonsterTokenProxy using MonsterToken Interface
    let monsterTokenProxy = MonsterToken.at(MonsterTokenProxy.address);
    let n = await monsterTokenProxy.n()
    console.log('n (before setN): ', n.toNumber())
    
    // use setN function through proxy contract
    await monsterTokenProxy.setN(10)
    n = await monsterTokenProxy.n()
    console.log('n (after setN): ', n.toNumber())
};