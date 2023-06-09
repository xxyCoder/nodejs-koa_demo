# nodejs + koa 实现
## 项目初始化
1. npm init -y 初始化成后端项目
2. 把代码交到github上
3. npm i koa 
    依赖放在了node_modules
4. 新建文件夹src main.js为入口文件
## 关于启动main.js
- 使用node 代码会常驻内存，每次更新都需要重新启动
- nodemon热更新 不需要在更新之后重新启动
    - [nodemon] watching extensions: js,mjs,json
    - 会监听以js、mjs、json结尾的文件更新
    - npm i nodemon -D 
        放在开发环境中
- 在package.json中配置"dev"脚本 使用npm run dev运行dev脚本
## 读取配置文件
- 安装dotenv
- 读取根目录下的.env文件，将配置写入process.env中
## 添加路由
- 对于不同的路径，调用对应的处理函数
- 编写在单独的文件夹中，命名为router，方便管理，容易阅读
1. npm i koa-router
2. 实例化路由
3. 编写路由
4. 注册中间件
## 添加app文件
- 将Koa的东西封装，分开app业务和http服务
## 控制层
- 将路由处理逻辑放在控制层
## 解析body
- npm i koa-body
## 服务层
- 主要是做数据库的处理
## 数据库操作
- npm i sequelize mysql2
## 拆分中间件
- 对于不同的接口应用对应的中间件
## 错误处理
- 声明常量，需要的时候可以复用
## 加密
- 数据保存在数据库之前，需要对密码加密
- npm install bcryptjs
## 颁发token
- 登录成功后，给用户颁布一个token令牌，以后用户在每一次请求中携带这个令牌
- jwt json web token
    npm install jsonwebtoken
    