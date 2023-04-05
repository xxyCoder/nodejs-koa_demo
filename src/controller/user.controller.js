const { createUser, getUserInfo,updateById } = require('../service/user.service.js')
const { userRegisterError } = require('../constant/err.types.js')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config.default.js')

class UserController {
    async register(ctx, next) {
        // 1. 获取数据
        const { user_name, password,isAdmin } = ctx.request.body;
        try {
            // 2. 操作数据
            const res = await createUser(user_name, password,isAdmin);
            // 3. 返回结果
            ctx.body = {
                code: 0,
                message: '用户注册成功',
                result: {
                    id: res.id,
                    user_name: res.user_name,
                    isAdmin: res.isAdmin
                }
            };
        } catch(err) {
            ctx.body = userRegisterError;
        }
    }
    async login(ctx, next) {
        const { user_name } = ctx.request.body;
        // 颁发token
        try {
            const { password,...res } = await getUserInfo({ user_name });    // 剔除password
            ctx.body = {
                code: 0,
                message: '用户登录成功',
                result: {
                    token: jwt.sign(res,JWT_SECRET,{ expiresIn: '1d' })
                }
            };
        } catch(err) {
            console.error('用户登录失败')
        }
        // ctx.body = `欢迎回来,${user_name}`;
    }
    async changePassword(ctx,next) {
        const id = ctx.state.user.id;
        const password = ctx.request.body.password;
        // console.log(id,password);
        if(await updateById({ id,password })) {
            ctx.body = {
                code: 0,
                message: '修改密码成功',
                result: ''
            };
        } else {
            ctx.body = {
                code: 1,
                message: '修改密码失败',
                result:''
            }
        }
    }
}

// 导出实例化对象
module.exports = new UserController();