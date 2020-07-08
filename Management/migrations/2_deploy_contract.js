const Management = artifacts.require("../contracts/Management.sol");

module.exports = function(deployer) {
  deployer.deploy(Management);
};
