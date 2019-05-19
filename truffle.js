var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "erupt artist almost until venture slice drift slide question dolphin tiger lift";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};