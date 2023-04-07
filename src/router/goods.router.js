const Router = require('koa-router');
const { 
    upload,
    create,
    update,
    remove,
    restore,
    findAll 
} = require('../controller/goods.controller')
const { hasAdminPermission,auth } = require('../middleware/auth.middleware')
const { validator } = require('../middleware/goods.middleware')

const router = new Router({prefix: '/goods'});

router.post('/upload',auth,hasAdminPermission,upload);  // 图片上传接口
router.post('/',auth,hasAdminPermission,validator,create); // 发布商品接口
router.put('/:id',auth,hasAdminPermission,validator,update) // 修改商品接口
router.post('/:id/off',auth,hasAdminPermission,remove); // 商品下架接口
router.post('/:id/on',auth,hasAdminPermission,restore); // 商品上线功能
router.get('/',findAll);   // 获取商品列表

module.exports = router;
