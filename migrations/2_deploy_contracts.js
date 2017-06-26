var Koin = artifacts.require("./AbstractKoin.sol");
var MetaKoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(Koin);
  deployer.link(Koin, MetaKoin);
  deployer.deploy(MetaKoin);
};
