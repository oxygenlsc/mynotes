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

# three 

ReactDOM.hydrate(<App/>,document.getElementById('root'))
hydrate 代表注水

合并webpack配置（提取公共的）

webpack-merge

安装clean-webpack-plugin 用于清除上次打包结果

# four
1. 利用webpack生成样式文件
2. 在页面源代码中加入link元素，链接道样式文件
> 下载2个 关于样式的工具 npm i -D  mini-css-extract-plugin  css-loader

给服务端生成 同构的css代码
isomorphic-style-loader

# five 
1. 搞得图片

1. 客户端负责生成文件

2. 服务器保证图片路径一致

npm i -D file-loader

# six 使用路由

安装 npm i react-router-dom

服务端使用 StaticRouter  通过它的location来给地址

# seven 使用路由配置
利用第3放库  react-router-config

# 多级路由处理