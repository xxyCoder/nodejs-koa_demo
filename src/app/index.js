const Koa = require('koa'); // koa是一个类，调用需要实例化
const app = new Koa();


const userRouter = require('../router/user.router.js');
app.use(userRouter.routes());
app.use((cxt,next) => {
    cxt.body = 'hello api';
})

module.exports = app;