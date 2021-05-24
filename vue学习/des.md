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

# 在vue-cli搭建的项目中使用css module

需要将样式文件命名为 xxx.module.ooo

# 得到组件渲染的Dom
//得到组件生成的根dom
function getComponentRootDom(comp,props){
  const vm = new Vue({
    render:(h)=>h(comp,{props}),
  });
  vm.$mount();
  return vm.$el
}
# 实例里面的 $el 表示渲染出来得到的真实dom

##  像实例注入成员

Vue.prototype.sayHello = function(){

}
//这样的话全局所有的实例都有这个方法了

## ref

实例里面的 $refs 可以用于存储你所写的ref元素

## 远程获取数据的意义

# axios 的使用 

安装axios  yarn  add axios

# 生命周期函数
``` export default {
beforeCreate(){
  console.log('第一个周期函数，实例被创建之后，被注入之前');
},
created(){
  console.log('第二个周期函数，实例被注入之后，生成vnode之前');
},
beforeMount(){
  console.log('第三个周期函数，实例生成VNode之后，生成真实dom之前');
},
mounted(){
  console.log('第四个周期函数，实例生成真实dom之后，挂载真实dom之前');
},
beforeUpdate(){
  console.log('第五个周期函数,已挂载和从新渲染之间运行');
},
updated(){
  console.log('第六个周期函数，从新渲染和已挂载之间运行');
},
beforeDestroy(){
  console.log('第七个周期函数，挂载真实dom之后，销毁组件之前');
},
destroyed(){
  console.log('第八个周期函数，销毁组件之后，已销毁组件之前');
}
} 
```
 # 自定义指令

 1. 全局定义

 2. 局部定义

 directives:{
   
 }

 # 混入  提取共同的代码
 通过 mixins:[common]

 # 递归组件
 在组件内部进行自我递归
 在组件内部写个name：“”

 就可以通过name使用自己


 # 动态路由
 export default [
    {name:'Blog',path:'/blog:id', component:Blog},
  ]
  :后面加名字

  router插件，会在vue的原型上会注入一些东西

  this.$route  $route提供路由信息
  可以通过他里面的params拿到连接上id的值