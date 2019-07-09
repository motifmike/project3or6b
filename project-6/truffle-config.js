const HDWalletProvider = require('truffle-hdwallet-provider')


var infuraKey = "v3/59111a14fc5e44678a422c7211d1b39c"
var mnemonic = "trust suffer lady occur animal term sign erase powder diet pen anchor"

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/${infuraKey}`),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000
    },
  },
  solc: {
    optimizer: { // Turning on compiler optimization that removes some local variables during compilation
      enabled: true,
      runs: 200
    }
  }
}
