const Router = require('koa-router');
const router = new Router({prefix: '/users'});  // 以下编写的路径自动添加该前缀

const { register,login } = require('../controller/user.controller');
const { userValidator,verifyUser,crpytPassword,verifyLogin } = require('../middleware/user.middleware');
// 注册接口
router.post('/register',userValidator,verifyUser,crpytPassword,register);
// 登录接口
router.post('/login',userValidator,verifyLogin,login)

module.exports = router;