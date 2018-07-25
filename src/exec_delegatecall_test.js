const A = artifacts.require("A");
const B = artifacts.require('B');

module.exports = async (callback) => {
    // perform actions
   let a = await A.deployed();
   let b = await B.deployed();

   {
    let n_a = await a.n.call();
    let n_b = await b.n.call();
    let owner_a = await a.owner.call();
    let owner_b = await b.owner.call();
 
    console.log(n_a.toNumber());
    console.log(n_b.toNumber());
    console.log(owner_a);
    console.log(owner_b);
   }

   await a.callSetN(3);

   {
    let n_a = await a.n.call();
    let n_b = await b.n.call();
    let owner_a = await a.owner.call();
    let owner_b = await b.owner.call();
 
    console.log(n_a.toNumber());
    console.log(n_b.toNumber());
    console.log(owner_a);
    console.log(owner_b);
   }

   await a.delegatecallSetN(b.address, 5);

   {
    let n_a = await a.n.call();
    let n_b = await b.n.call();
    let owner_a = await a.owner.call();
    let owner_b = await b.owner.call();
 
    console.log(n_a.toNumber());
    console.log(n_b.toNumber());
    console.log(owner_a);
    console.log(owner_b);
   }
};