const { createUser } = require('../service/user.service.js')

class UserController {
    async register(ctx,next) {
        // 1. 获取数据
        const { user_name,password } = ctx.request.body;
        // 2. 操作数据
        const res = await createUser(user_name,password);
        console.log(res);
        // 3. 返回结果
        ctx.body = '用户注册成功';
    }
    async login(ctx,next) {
        ctx.body = '用户登录成功'
    }
}

// 导出实例化对象
module.exports = new UserController();