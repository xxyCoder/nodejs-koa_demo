const Koa = require('koa'); // koa是一个类，调用需要实例化
const app = new Koa();

const { APP_PORT } = require('./config/config.default.js');

app.use((cxt,next) => {
    cxt.body = 'hello api';
})

app.listen(APP_PORT,() => { // 监听3000端口，启动成功调用回调函数
    console.log(`serve is running on http://localhost:${APP_PORT}`);
})