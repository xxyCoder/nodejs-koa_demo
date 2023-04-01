const { DataTypes } = require('sequelize'); // 导入数据类型

const seq = require('../db/seq');

// 创建模型 会自动推导表名，在其后加s 即 mall_users
const User = seq.define('mall_user',{
    // id会被sequlize自动创建
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,    // 字段not null
        unique: true,
        comment: '用户名唯一'
    },
    password: {
        type: DataTypes.CHAR(64),
        allowNull: false,
        comment: '密码'
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
        comment: '0表示不是管理员,1表示是管理员'
    }
},{
    timestamps: false   // 禁止添加其他列
});

// User.sync({ // 模型同步，创建该表
//     force: true // 数据库如果存在该表，则先删除
// });

module.exports = User;