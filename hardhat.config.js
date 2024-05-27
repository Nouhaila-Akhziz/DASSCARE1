
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
 networks:{
  ganache:{
   url : ' http://127.0.0.1:7545',
   accounts : ['0x23bfb59be7e975ad6ae30bcc445f40da00bf3bb3ceceb7b673a95fce71cd7719']
}
}
};
