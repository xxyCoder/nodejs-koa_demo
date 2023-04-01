const { createUser } = require('../service/user.service.js')

class UserController {
    async register(ctx,next) {
        // 1. 获取数据
        const { user_name,password } = ctx.request.body;
        // 2. 操作数据
        const res = await createUser(user_name,password);
        // 3. 返回结果
        ctx.body = {
            code: 0,
            message: '用户注册成功',
            result: {
                id: res.id,
                user_name: res.user_name
            }
        };
    }
    async login(ctx,next) {
        ctx.body = '用户登录成功'
    }
}

// 导出实例化对象
module.exports = new UserController();