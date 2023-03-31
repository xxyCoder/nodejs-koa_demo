const Koa = require('koa'); // koa是一个类，调用需要实例化
const { koaBody } = require('koa-body');
const userRouter = require('../router/user.router.js');

const app = new Koa();
app.use(koaBody());
app.use(userRouter.routes());
app.use((cxt,next) => {
    cxt.body = 'hello api';
})

module.exports = app;