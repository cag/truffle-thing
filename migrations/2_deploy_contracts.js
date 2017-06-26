var MetaKoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(MetaKoin);
};
