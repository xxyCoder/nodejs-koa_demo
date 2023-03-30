// 默认配置
const dotenv = require('dotenv');
dotenv.config();    // 读取以.env结尾的配置文件

// console.log(process.env);
module.exports = process.env;