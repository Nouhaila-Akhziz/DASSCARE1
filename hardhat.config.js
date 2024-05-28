
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
 networks:{
  ganache:{
   url : ' http://127.0.0.1:8545',
   accounts : ['0xfe5e4c544166fa0cadb379019ee4eab1a2d1afa4b5bfdd652c3e8a1954a3a38f','0xa86b293fdbe3709464360082813e22374a4dc795998c333cd6851a4591262f67']
}
}
};
