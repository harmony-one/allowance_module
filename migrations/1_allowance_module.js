var AllowanceModule = artifacts.require("AllowanceModule");

module.exports = function (deployer) {
  deployer.then(function () {
    return deployer.deploy(AllowanceModule).then(function (token) {
      console.log(`AllowanceModule is deployed at ${token.address}`);
    });
  });
};
