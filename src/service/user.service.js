const User = require('../model/user.model');

class UserService {
    async createUser(user_name,password) {
        // todo: 写入数据库
        const res = await User.create({ user_name,password });
        return res.dataValues;
    }
    async getUserInfo({ id,user_name,password,isAdmin }) {
        const whereOpt = {};
        id && Object.assign(whereOpt,{ id });
        user_name && Object.assign(whereOpt,{ user_name });
        password && Object.assign(whereOpt,{ password });
        isAdmin && Object.assign(whereOpt,{ isAdmin});

        const res = await User.findOne({
            attributes: ['id','user_name','password','isAdmin'],
            where: whereOpt
        });

        return res ? res.dataValues : null;
    }
}

module.exports = new UserService();