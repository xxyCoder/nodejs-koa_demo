// node模块
const path = require('path');
// 第三方模块
const Koa = require('koa'); // koa是一个类，调用需要实例化
const { koaBody } = require('koa-body');
const KoaStatic = require('koa-static');
const parameter = require('koa-parameter'); // 参数校验
// 自定义模块
const router = require('../router/index.js');

const app = new Koa();
app.use(parameter(app));
app.use(koaBody({
    multipart: true,
    formidable: {
        uploadDir: path.join(__dirname,'../uploads'),
        keepExtensions: true
    }
}));
app.use(KoaStatic(path.join(__dirname,'../uploads')));
app.use(router.routes());
app.use(router.allowedMethods());   // 处理不支持的请求方法

module.exports = app;