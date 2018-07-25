var A = artifacts.require("A");
var B = artifacts.require("B");

module.exports = (deployer, network) => {
  deployer.then(async () => {
    await deployer.deploy(B);
    return deployer.deploy(A, B.address)
  })
}