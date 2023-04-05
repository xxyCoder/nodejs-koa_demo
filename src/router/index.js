const fs = require('fs');
const Router = require('koa-router');
const router = new Router();

fs.readdirSync(__dirname).forEach(file => {
    if(file !== 'index.js') {
        const fileObject = require('./' + file);
        router.use(fileObject.routes())
    }
})

module.exports = router;