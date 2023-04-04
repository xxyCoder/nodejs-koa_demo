const Router = require('koa-router');
const router = new Router({prefix: '/users'});  // 以下编写的路径自动添加该前缀
const { auth } = require('../middleware/auth.middleware')
const { register,login,changePassword } = require('../controller/user.controller');
const { userValidator,verifyUser,crpytPassword,verifyLogin } = require('../middleware/user.middleware');
// 注册接口
router.post('/register',userValidator,verifyUser,crpytPassword,register);
// 登录接口
router.post('/login',userValidator,verifyLogin,login)
// 修改密码接口
router.patch('/',auth,crpytPassword,changePassword,(cxt,next) => {
    
    cxt.body = '修改密码成功';
})

module.exports = router;