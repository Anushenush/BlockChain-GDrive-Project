require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
    solidity: "0.8.17",
    networks: {
        hardhat: {
            chainId: 1337,
            // Other network configuration options...
        },
        // Other networks...
    },
    // Other global configuration options...
    paths:{
        artifacts:"./customer/src/artifacts",
    },
};
