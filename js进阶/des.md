# 原型和原型链 ~~

- 所有的对象都是new创建的   ```new 函数```创建

## 原型 prototype

所有函数都有一个属性：prototype ,称之为函数原型
默认情况下，prototype都是一个普通的object对象

prototype = {}

默认情况下，prototype中有一个属性，constructor,它也是一个对象，它指向构造函数本身

## 隐式原型 __proto__

所有的对象都有一个属性：```__proto__``` ,称之为隐式原型指向创建这个对象的构造函数的原型

当访问一个对象的成员时；

1. 看该对象自身是否拥有该成员，如果有直接使用
2. 看该对象的隐式原型中是否拥有该成员，如果拥有直接使用 

猴子补丁：在函数原型中加入成员，以增强其对象的功能，猴子补丁会导致原型污染使用需谨慎


## 原型链

当访问一个对象时在自身找不到时就会到它的隐式原型上去找这样一层层找上去的就是原型链

特殊点

1. Function的__proto__指向自身的原型prototype
2. Object的prototype的__proto__指向null


# 原型链的应用 ~~

## 基础方法   

**不推荐直接使用系统成员__proto__**

1. Object.getPrototypeOf(对象)
**获取对象的隐式原型**
***

2. Object.prototype.isPrototypOf(对象)
**判断当前对象（this）是否在指定对象的原型链上**
***

3. 对象 instanceof 函数
**判断函数的原型是否在对象的原型链上**
***

4. Object.create(obj)
**以obj为隐式原型创建一个新的对象**

***

5. obj.hasOwnProperty('属性名')
 **判断对象上面是否有这个属性**
 forin循环就是要加这个以防止去循环到原型链上面的属性，（以前不知道为啥要加现在知道了）
***

## 应用

**实现继承**

默认情况下，所有的构造函数的父类都是Object

```js
//继承的函数
    // 方式1
    function inherit(son,father){
        son.prototype = Object.create(father.prototype);
        son.prototype.constructor = son;
        son.uber = father.prototype;
    }
    // 方式2
    function inherit(son,father){
        var Temp = function() {};
        Temp.prototype = father.prototype;
        son.prototype = new Temp();
        son.constructor = son;
        son.uber = father.prototype;
    }
    // 上面的优化
    var  inherit = (function(){
        var Temp = function(){};
        return function(son,father){
            Temp.prototype = father.prototype;
            son.prototype = new Temp();
            son.constructor = son;
            son.uber = father.prototype;
        }
    }());
```

# 属性描述符 ~~

属性描述符:它表达了一个属性的相关信息(元数据),它的本质上是一个对象

1. 数据属性 （只可意会不可言传）
2. 存取器属性
    1. 当给它赋值，会自动运行函数。setter
    2. 当给他取值时,会自动运行函数。getter

```js
var obj = {};
Object.defineProperty(obj,'x',{
    get:function(){
            //当读取属性x时运行的函数
            //该函数的返回值会作为属性值

    },
    set:function(val){
        // 当给x属性赋值时运行这个函数val是赋的值
    }
})
```
# 面试题 ~~

```js
var obj = {}
// 定义obj的name属性只能为abc且不能更改
//答案
Object.defineProperty(obj,'name',{
    get:function(){
          return 'abc'
    },
})
Object.defineProperty(obj,'name',{
   value:'abc',
   wirtable:false
})
```

***

**Object.getOwnPropertyDescriptor(obj,属性)**
获取某个对象的某个属性的属性描述符对象（该属性必须直接属于该对象）


# 执行上下文 ~~
全局执行上下文：所有js代码执行前都会有该环境
函数执行上下文:一个函数执行之前，创建的一块内存空间，空间中有包含该函数执行所需要的数据，为该函数执行提供支持

执行上下文堆栈：call stack 所有执行上下文组成的内存空间

js引擎始终是执行栈顶的上下文

**执行上下文的知识只能意会大概就是说程序是如何执行的内部发生的原理，VO作用域等等**

# 作用域链 ~~

1. VO中包含一个额外的属性，该属性指向创建该VO的函数的本身
2. 每个函数在创建时，会有一个隐藏属性，他指向创建该函数时的A0

**闭包的定义：广义上函数使用外面的东西就会产生闭包**
**狭义上是函数在使用外面的东西外面的上下文已经消失，但是外面的被使用的东西被保留下来了这就是闭包**

# 事件循环 ~~

异步：某些函数不会立即执行需要等到某个时机成熟才会执行

# 函数柯里化 ~~