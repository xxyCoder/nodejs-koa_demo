const Router = require('koa-router');
const router = new Router({prefix: '/users'});  // 以下编写的路径自动添加该前缀

const { register,login } = require('../controller/user.controller')

// 注册接口
router.post('/register',register);
// 登录接口
router.post('/login',login)

module.exports = router;