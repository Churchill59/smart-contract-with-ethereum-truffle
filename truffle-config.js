// Allows us to use ES6 in our migrations and tests.
require('babel-register')

const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "faculty XXXXXXX eagle";
const infuraAPIKey = "310XXXXXXXXXXXXXXXXda2";

module.exports = {
   networks: { 
    ganache: {
    development: {
    host: "127.0.0.1",
    port: 9545,
    network_id: "*" // Match any network id
    }
  },
  rinkeby: {
    provider: function() {
      return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/" + infuraAPIKey);
    },
    network_id: '4',
    from:'0x31a5ace709a7c32847157e6914E8437B972c6751'
  }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.2",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}