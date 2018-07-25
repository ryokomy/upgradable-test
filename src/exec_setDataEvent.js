const EventTest = artifacts.require('EventTest');

module.exports = async (callback) => {
    // perform actions
    let instance = await EventTest.deployed();
    let result = await instance.setData("0x1111222233334444555566667777888899990000aaaabbbbccccddddeeeeffff1111222233334444555566667777888899990000aaaabbbbccccddddeeeeffff");
    console.log(result);
};