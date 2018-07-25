const EventTest = artifacts.require('EventTest');

module.exports = async (callback) => {
    // perform actions
    let instance = await EventTest.deployed();
    let result = await instance.set(1);
    console.log(result);
};