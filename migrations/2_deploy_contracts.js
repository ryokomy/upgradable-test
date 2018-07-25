var MonsterToken = artifacts.require("MonsterToken");
var MonsterTokenProxy = artifacts.require("MonsterTokenProxy");

module.exports = (deployer, network) => {
  deployer.then(async () => {
    await deployer.deploy(MonsterToken);
    return deployer.deploy(MonsterTokenProxy, MonsterToken.address)
  })
}