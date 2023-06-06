require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();

const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL || "http://sepolia-key/example";
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY || "sepolia-key";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "etherscan-api";
const COINMARKETCAP_API_KEY =
  process.env.COINMARKETCAP_API_KEY || "coinmarket-api";
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL || "mainnet-url";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockConfirmations: 1,
      forking: {
        url: MAINNET_RPC_URL,
      },
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
      chainId: 11155111,
      blockConfirmations: 6,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.18",
      },
      {
        version: "0.4.19",
      },
      {
        version: "0.6.12",
      },
      {
        version: "0.6.6",
      },
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    // coinmarketcap: COINMARKETCAP_API_KEY,
  },
  mocha: {
    timeout: 500000,
  },
};
