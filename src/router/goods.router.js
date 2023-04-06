const Router = require('koa-router');
const { upload,create,update } = require('../controller/goods.controller')
const { hasAdminPermission,auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/goods.middleware')

const router = new Router({prefix: '/goods'});

router.post('/upload',auth,hasAdminPermission,upload);  // 图片上传接口
router.post('/',auth,hasAdminPermission,validator,create); // 发布商品接口
router.put('/:id',auth,hasAdminPermission,validator,update)

module.exports = router;
