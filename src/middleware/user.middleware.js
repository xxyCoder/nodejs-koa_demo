const { getUserInfo } = require('../service/user.service');
const { userFormatError,userAlreadyExists,userRegisterError } = require('../constant/err.types')

const userValidator = async (ctx, next) => {
    const { user_name, password } = ctx.request.body;
    // 合法
    if (!user_name || !password) {
        console.error('用户名或密码为空！');
        ctx.status = 400;
        ctx.body = userFormatError
        return ;
    }
    await next();
};

const verifyUser = async (ctx, next) => {
    const { user_name, password } = ctx.request.body;
    try {
        if (getUserInfo({ user_name })) {
            console.error('用户存在',{user_name});
            ctx.status = 409;
            ctx.body = userAlreadyExists
            return;
        }
    } catch(err) {
        ctx.body = userRegisterError;
        return ;
    }
    await next();
}

module.exports = {
    userValidator,
    verifyUser
}