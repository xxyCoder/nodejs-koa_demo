const Router = require('koa-router');
const router = new Router({prefix: '/carts'});

const { auth } = require('../middleware/auth.middleware');
const { validator } = require('../middleware/carts.middleware');
const { add,findAll } = require('../controller/carts.controller')

router.post('/',auth,validator,add);
router.get('/',auth,findAll);

module.exports = router;