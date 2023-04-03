const { getUserInfo } = require('../service/user.service');
const { userFormatError,
    userAlreadyExists,
    userRegisterError,
    userDoesNotExist,
    userLoginFail,
    userPasswordInvalid 
} = require('../constant/err.types')
const bcrpty = require('bcryptjs');

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
        if (!getUserInfo({ user_name })) {
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

const crpytPassword = async (ctx,next) => {   // 密码加密
    const { password } = ctx.request.body;
    const salt = bcrpty.genSaltSync(10);
    const hash = bcrpty.hashSync(password,salt);    // hash保存的是密文

    ctx.request.body.password = hash;
    await next();
}

const verifyLogin = async(ctx,next) => {    // 验证登录
    const { user_name,password } = ctx.request.body;

    try {
        const res = await getUserInfo({ user_name });   // 判断用户是否存在
        if(!res) {
            console.error('用户名不存在');
            ctx.body = userDoesNotExist;
            return ;
        }
        if(!bcrpty.compareSync(password,res.password)) {    // 判断密码
            console.error('密码错误');
            ctx.body = userPasswordInvalid;
            return ;
        }
        await next();
    } catch(e) {
        console.error(e);
        ctx.body = userLoginFail;
    }
}

module.exports = {
    userValidator,
    verifyUser,
    crpytPassword,
    verifyLogin
}