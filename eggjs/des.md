1. 使用egg  安装2个核心库
npm i  egg   npm i -D egg-bin

约定式文件夹  app  config   app下面必须要有Controller

# Controller 处理请求的写js文件一个js文件就是一个控制器

router.js  路由文件

启用插件再config文件夹下面的  plugin.js 只是做开关的  插件的功能配置就是在config.default.js

# 模板引擎

egg中的模板引擎

egg内置egg-view，本身不是模板引擎，但它可以对不同的模板引擎统一配置，统一处理  https://github.com/eggjs/egg-view
我们需要安装具体的模板引擎插件，完成模板引擎的启用

字符串 <h1><%=name%><h1>
数据  {name:'sss'}

安装模板引擎插件

egg-view 支持多种模板引擎，用的较多是egg-view-numjucks和egg-view-ejs
http://github.com/eggjs/egg-view-ejs
npm i egg-view-ejs

安装好后统一配置

通过render函数渲染模板页面

render(name,model) //渲染模板文件，并赋值给ctx.body
renderView(name,model)// 渲染模板文件，仅返回不赋值
renderString(tpl,model)// 渲染模板字符串，仅返回不赋值

# 根目录下面app.js 在全局app下面扩展 比如在全局app下添加axios


# 中间件  app 下面的 middleware 放自己写的中间件