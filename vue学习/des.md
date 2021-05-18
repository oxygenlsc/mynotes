# vue2

<!-- {{}} mustach 大胡子 -->

数据响应式： 数据变化-> 重新渲染 

# vue实例里面的成员


指令： v-bind  :
       v-for 
       v-on   @ 

属性 ： props 外面传过来的  声明组件的属性

vue-cli   yarn global add @vue/cli

创建工程  vue create name

安装 vue调试工具  vue devtools


特殊的 绑定 style 绑定为一个对象
           class  字符串 数组 对象   

计算属性：

问 计算属性和方法有啥区别

方法会每次都调用，而计算属性会根据监控依赖的数据，如果依赖没有变化计算属性就不会再执行
> 计算属性本质上是包含getter和setter的方法  当获取计算属性时，实际上是在调用计算属性的getter方法，vue会收集计算属性的依赖，并缓存计算属性的返回结果，只有当依赖发生变化后才会重新计算
方法没有缓存，每次调用方法都会导致重新执行。
计算属性的getter和setter的参数固定，getter没有参数，setter只有一个参数，而方法的参数不限
由于有以上的这些区别，因此计算属性通常是根据已有数据得到其他数据，并在得到数据的过程中不建议使用异步，当前时间，随机数等副作用。
实际上，他们最重要的区别是含义上的区别，计算属性含义上也是一个数据，可以读取也可以赋值：方法含义上是一个操作，用于处理一些事情。

# 组件事件

v-if
v-show  
2者的区别

vif 控制啥否生成这个vnode  vshow始终生成vnode只是控制dom的display属性

$event 传入事件参数

实例成员  this.$emit()

         注册事件

组件测试，可以运行单个组件  
先安装  npm install -g @vue/cli-service-global

然后命令 vue serve url(‘./src’)    vue serve ./src/components/Pager/test.vue


# 插槽 的简单用法 

<!-- 内置组件 -->

<solt></solt>  你在父组件中内部写东西就会替换这个

# 插槽  具名插槽 

当一个组件中有多个插槽，在父组件中传入内容无法区别替换那个插槽所以出现具名插槽

<solt name='header'></solt>
<solt name='footer'></solt>

外边使用
<templete v-solt:default> 传入内容</templete> =》等于直接写
<templete v-solt:header> 传入内容</templete>
<templete #:footer> 传入内容</templete>

# 路由 

下载路由插件

npm i vue-router

在main.js入口文件使用这个插件

vue router 提供了3种路由模式：

1. hash:默认值。路由从浏览器地址栏中的hash部分获取路径，改变路径也是改变的hash部分。该模式兼容性最好

2. history：路由从浏览器地址栏的location.pathname中获取路径，改变路径使用Hashhistory api 该模式可以让地址栏最友好，但是需要浏览器支持history api


3. abstract: 路由从内存中获取路径，改变路径也只是改动内存的值。这种模式通常应用到非浏览器环境中。

# 全局组件 RouterLink  跳转的  router-link
active-class exact-active-class 这2个属性来改添加的类名
:to="item.link" 
:to = {name:''} 
to跳转的方法
导航 选中类 会给你添加  router-link-active router-link-exact-active

命名路由