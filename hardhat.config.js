
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
 networks:{
  ganache:{
   url : ' http://127.0.0.1:7545',
   accounts : ['e59ec7f659e3029854dd119dde826f313803b33cbcc8ed43154bc4f1b27c1b08']
}
}
};
