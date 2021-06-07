CSR VS SSR  vs 预渲染

csr : 客户端渲染
缺点

1. 浏览器长期处于白屏状态
2. 不利于SEO   （搜索引擎优化）
ssr ：服务端渲染

缺点：开发相对麻烦

# one

1. 搭建express服务器，对所有 get 请求均响应一个页面
2. 配置`package.json`,更加方便的启动服务器
3. 安装 `nodemon`，监控文件的变化

1. npm i express
2. 下载nodemon  npm i nodemon

# two 目标

1. 在服务端渲染React组件
安装 react react-dom
2. 服务器书写 `react`组件
安装webpack webpack-cli
3. 使用`webpack` 打包**服务器代码**到dist 目录
安装babel  npm i -D  @babel/core babel-loader  @babel/preset-react
4. 利用`@babel/preset-react`解析‘react’代码

npm i -D webpack-node-externals
5. 利用`externals` 配置和`webpack-node-externals`排除掉`node_modules`目录

npm-run-all ：把所有命令一起运行 先安装  npm i -D npm-run-all


6. 重新配置`package.json`
7. 渲染页面组件的内容到`div`中