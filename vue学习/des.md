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


  # vue-router 提供了 $router

用于控制页面跳转

# watch  用于观察数据的变化

watch:{
    数据name(新值，旧值){
        变化后你要做的事
    }//简写
    数据name:{
        hander(新值，旧值){},
        deep:false,//是否监听该数据内部的属性变化，默认false
        immediate:false//是否立即执行一次hander，默认false
    }
    数据name['属性name'](){
        //数据某个属性的变化监控
    }
}

# v-html 
就是设置内部为html 不会被转换为文本

# $listeners  v-model

$listeners 是vue的实例的属性，它用于获取父组件传过来的所有事件函数 ,这样就可以直接运行函数不用$emit  直接拿到函数调用结果。

  # 事件总线
  1. 提供监听某个事件的接口
  2. 提供取消监听的接口
  3. 触发事件的接口（可传递数据）
  4. 触发事件后会自动通知监听者

  //事件总线就是一个对象可以对事件监听取消触发

  所以在vue中就是直接 new vue() 对象 它自带 $on $off
   $emit 方法
   一般直接在main.js上 在vue的peototype 添加一个$bus属性来保存vue实例

  # 数据共享  vuex

  安装

   yarn  add vuex

   使用vuex 后  会在实例中添加一个$store对象

   就可以使用了

   数据的变更

   mutation  通过它来更改数据不要直接改

   store.commit('power',2) //通过commit来提交方法改变数据

   mutation 中不允许出现异步的操作

   提交 mutation 是改变仓库的唯一方法

   action 可以处理副作用然后改变值

   action 使用dispatch来触发

   # router and vuex

   vuex中模块化

   开启入namespaced

   getters：配置 就是相当于组件中的计算属性

   vuex 提供了一些辅助函数,以减少代码书写  自己查文档

   1. mapState
# 路由 导航前置守卫

router.beforeEach(){

}
# vue 实例 this.$watch(监控数据，回调函数)
用来监控的 和watch一样
vuex 里面也有watch


# vue 虚拟dom阐述
1. 虚拟dom本质上就是一个普通的js对象，用来描述视图的结构界面
2. 在vue中渲染视图会调用render函数，这种操作不仅发生在组件的创建过程中，也会发生在视图依赖的数据更新时。如果在渲染时，直接使用真实DOM，由于真实DOM的创建、更新、插入等操作会带来大量的性能损耗，从而就会极大的降低渲染效率。所以需要虚拟dom

# vue数据响应原理阐述

答：响应式的目标是，当数据改变的时候要去执行某些函数主要是render函数
在具体的实现上vue使用了4个部件

第一个部件是 observe  这个部件的功能就是把一个普通对象转换成响应式对象，主要是使用的Es5 的object.defineProty来实现，把数据变成seter和getter 类型的，这样在访问数据和改变数据时就给了vue可以做别的事的机会。
总之，Observer的目标，就是要让一个对象，它属性的读取、赋值，内部数组的变化都要能够被vue感知到。

第2个部件就是Dep  
它的作用就是记录依赖和派发更新

第3个部件是watcher 这个是帮助dep 知道它所需要记录的依赖是什么


第4个部件是scheduler 这个是用来优化的，因为当有多个数据进行改变的时候，如果我们直接运行函数就会运行多次，这个样是会影响效率的，所以这个部件会把这些事件放入到微队列中，等到上下文中的代码都执行完成之后再去运行，其实这个和react中的数据跟新差不多的，react中会合并setState，以优化效率
那这个又是如何加入到微队列中的喃，使用内部nextTickh函数，这个函数内部是使用promise.resolve().then(fun)来把函数加入到微对列的

# vue diff
在组件创建和更新时，vue会执行内部的update函数，使用render函数创建的虚拟dom将新旧两树进行对比，找到差异最后跟新到真实dom上，这个寻找差异的过程就是diff；

vue在内部通过一个叫patch的函数完成该过程，在对比的时候采用深度优先遍历同层比较的方式进行对比，在判断一个节点是否现同是通过tag和key来进行判断的。

在对比子节点数组时，vue对每个子节点数组使用2个指针，分别指向头尾，然后不断往中间靠拢进行对比，这样做的目的是为了尽量复用真实dom，减少销毁和创建真实dom。



# vue 生命周期详解