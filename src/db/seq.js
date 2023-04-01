const { Sequelize } = require('sequelize');
const {
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
} = require('../config/config.default.js')

const seq = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    dialect: 'mysql'
});

// 测试是否成功
// seq.authenticate().then(() => {
//     console.log('success');
// }).catch(err => {
//     console.log(err);
// }) 

module.exports = seq;