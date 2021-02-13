# 使用脚手架搭建工程

官方： create-react-app
第3方： next.js umi.js

1. yarn create react-app projectname

# 核心概念 ~~

### 组件和组件属性

组件：包含内容，样式和功能的UI单元

## 创建一个组件
**组件名称首字母必须大写**
1. 函数组件
返回一个react元素
2. 类组件
**组件中的数据**

props:该数据是由组件的使用者传递的数据，所有权不属于组件自身,因此组件无法改变改数据
state：该数据是由组件自身创建，所有权属于组件自身，因此组件有权改变改数据

# 深入认识setState

setState对状态的改变，可能是异步的
如果改变状态的代码处于某个HTML元素的事件中，则其是异步的，否则是同步的

最佳实践：
1. 把所有的setState当作是异步的
2. 永远不要信任setState调用之后的状态
3. 如果要使用改变之后的状态，需要使用回调函数（setState的第二个参数）
4. 如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态（setState的第一个函数）


React会对异步的setState进行优化，将多次setState进行合并（将多次状态改变完成后，在同一对state进行改变再触发render）


类组件的生命周期

## 旧版生命周期

 react < 16.0.0

 1. constructor : 
    1. 同一个组件对象只会创建一次
    2. 不能在第一次挂载到页面之前调用setState,为了避免问题，构造函数中严禁使用setState
 2. componentWillMount  
    1. 和构造函数一样，它只会运行一次
    2. 可以使用setState，但是为了避免bug不允许使用,因为在某些特别情况下，该函数可能会运行多次
 3. render
    1. 返回一个虚拟DOM，会被挂载到虚拟DOM树中，最终渲染到页面的真实Dom中
    2. render可能不只运行一次，只要需要重新渲染，就会重新运行
    3. 严谨使用setState，可能会导致递归调用
 4. componentDidMount 
    1. 只会执行一次
    2. 可以使用setState
    3. 通常情况下，会将网络请求放这个里面。
 5. 组件进入活跃状态
 6. componentWillReceiveProps （新的是没这个的 ）
    1. 即将接收新的属性值
    2. 参数为新的属性对象
    3. 该函数可能会导致一些bug
 7. shouldComponentUpdate
    1. 指示React是否要重新渲染该组件，通过返回true和false来指示
    2. 有2个参数。新的props新的state
 8. componentWillUpdate
 9. componentDidUpdate
    1. 往往在该函数中使用dom操作
 10. componentWillUnmount
    1. 通常在该函数中销毁一些组件依赖的资源，比如计时器
 
## 新版生命周期

 react >= 16.0.0

 1. getDerivedStateFromProps
    1. 通过参数可以获取新的属性和状态
    2. 该函数是静态的
    3. 该函数的返回值会覆盖掉组件状态
    4. 该函数几乎是没有什么用
 2. getSnapshotBeforeUpdate
    1. 虚拟的DOM构建完成，但还未实际渲染到页面中


# 表单元素 ~~

受控组件和非受控组件

受控组件：组件的使用者，有能力完全控制改组件的行为和内容。通常情况下，受控组件往往没有自身的状态，其内容完全收到属性的控制。

非受控组件：组件的使用者，没有能力控制改组件的行为和内容，组件的行为和内容完全自行控制。

**表单组件默认是非受控组件，一旦设置了表单组件的value属性，就变成了受控组件（单选和多选框设置checked）**

# React进阶

## 属性默认值
 通过一个静态属性 ```defaultProps``` 告知react属性默认值
## 类型检测
通过一个库props-types

# 高阶组件 HOC

通常可以利用HOC实现横切关注点

# ref
 
 1. ref作用于内置的html组件，得到的将是真实的dom对象
 2. ref作用于类组件，得到的将是类的实列
 3. ref不能作用于函数组件

 ref不再推荐使用字符串赋值，字符串赋值的方式将来可能会被移除

目前，ref推荐使用对象或者函数

通过 React.createRef 创建对象

# context
新版本的

上下文是独立于组件的一个对象
**创建上下文**

let context = React.createContext({
   a:默认值
})//这就创建了一个上下文对象返回的是一个包含2个属性的对象

1. Provider属性：一个组件生产着，该组件会创建一个上下文:通过它的value属性 通过该属性可以为其赋值,同一个provider不要使用在多个组件中
2. Comsumer属性:生产着
在类组件中通过this.context来获取上下文的值
在函数组件中通过Comsumer来获取上下文的值

Comsumer 是一个组件，它的子节点是一个函数

<ctx.Comsumer>
{(上下文的值)=>{

}}
</ctx.Comsumer>
上下文练习完毕请看form组件封装的

# react 渲染原理 ~~

渲染：生成用于显示的对象，以及将这些对象形成真实的DOM对象

- React元素： React Element ,通过React.createElement创建（语法糖：jsx）

- React节点：专门用于渲染到UI界面的对象，React会通过React元素创建React节点
- 节点类型：
   - React DOM节点：创建该节点的react元素 类型是一个字符串
   - React 组件节点：创建该节点的React元素类型是一个函数或者是一个类
   - React TextNode 文本节点： 由字符串创建的
   - React 空节点：由null，undefined, false
   - React 数组节点：该节点由一个数组创建的
- 真实DOM：通过document.createElemet创建的节点 

**元素->节点->ui**

## 首次渲染（新节点渲染）

1. 通过参数的值创建节点
2. 根据不同的节点做不同的事情
   1. 文本节点： 通过document.createTextNode 创建真实的文本节点
   2. 空节点： 啥子都不做
   3. 数组节点； 遍历数组，将数组每一项递归创建节点（回到第一步反复操作，直到遍历结束）
   4. DOM节点：通过document.createElement创建的真实dom节点，然后遍历React元素的children属性，递归操作（回到第一步反复操作，直到遍历结束）
   5. 组件节点
      1. 函数组件：调用函数，将该函数的返回结果递归生成节点
      2. 类组件：
         1. 创建该类的实例
         2. 立即调用对象的生命周期方法：getDerivedStateFromProps
         3. 运行该对象的render方法，拿到节点对象（将该节点递归操作，回到第一步进行反复操作，直到遍历结束）
         4. 将该组件的componentDidMount加入到执行对列（先进先执行），当整个虚拟DOM树全部构建完毕，并且将真实的DOM放到容器后执行
3. 生成出虚拟DOM树之后，将该树保存起来，以便后续使用。
4. 将之前生成的真的DOM对象，加入到容器中。


虚拟dom树 ：由这些节点组成的树形结构就是虚拟dom树  


# 更新节点和卸载节点 ~~

更新的场景

1. 重新调用ReactDOM.render函数从新渲染节点树
   1. 触发根节点更新
2. 在类组件的实例对象中调用setState，会导致该实例所在节点的跟新

**节点的更新**

- 如果调用的是ReactDOM.render,进入根节点的对比（diff（这个对比的过程））更新

- 如果调用的setState
   - 1. 运行生命周期函数，getDerivedStateFromProps
   - 2. 运行生命周期函数，shouldComponentUpdate,如果该函数返回false，结束当前流程
   - 3. 运行render，得到一个新的节点，进入该新的节点的对比更新
   - 4. 将生命周期函数，getSnapshotBeforeUpdate加入执行队列，以待将来更新
   - 5. 将生命周期函数，componentDidUpdate加入执行队列，以待将来执行

后续步骤：
- 1. 完成真实的DOM更新
- 2. 依次调用执行队列中的componentDidMount
- 3. 依次调用执行队列中的getSnapshotBeforeUpdate
- 4. 依次调用执行队列中的componentDidUpdate
- 5. 依次调用执行队列中的componentWillUnMount

**对比更新**

将新产生的节点，对比之前虚拟DOM中的结点，发现差异，完成更新

问题：对比之前DOM树中的那个节点

React为了提高对比效率，做出以下假设

1. 假设节点不会出现层次的移动（对比时，直接找到旧树中对应位置的节点进行对比）
2. 不同的节点类型会生成不同的结构
   1. 相同的节点类型：节点本身类型相同，如果是由React元素生成，type值必须一致，如果是组件节点，组件类型也必须相同
   2. 其他的，都属于不想同的节点类型
3. 多个兄弟节点通过唯一标识（key） 来确定对比的新节点

key值的作用：用于通过旧节点，寻找对应的新节点，如果某个旧节点有key值，则其跟新时会寻找相同层级中的相同key值进行对比。

key值应该在某一个范围内保持唯一且稳定
### 找到了对比目标

 判断节点类型是否一致

- **一致**

根据不同节点类型，做不同的事情

**空节点** ：不做任何事

**DOM节点** ： 

1. 直接使用之前的真实DOM对象（重用）

2. 将其属性的变化记录下来以待将来统一完成更新

3. 遍历该新的React元素的子元素，**递归对比更新**

**文本节点**
1. 直接重用之前的真实DOM对象
2. 将新的文本变化记录下来，将来统一完成更新

**组件节点**

**函数组件**：重新调用函数，得到一个节点对象，进行**递归对比更新**

**类组件**： 
1. 重用之前的实例
2. 调用生命周期方法 getDerivedStateFromProps
3. 运行生命周期函数，shouldComponentUpdate,如果该函数返回false，结束当前流程
4. 运行render，得到一个新的节点，进行**递归对比更新**
5. 将生命周期函数，getSnapshotBeforeUpdate加入执行队列，以待将来更新
6. 将生命周期函数，componentDidUpdate加入执行队列，以待将来执行
**数组节点** ：遍历数组进行**递归对比更新**
- **不一致**
整体上，卸载旧的节点，全新创建新的节点 

**卸载旧的节点**

1. **文本节点，DOM节点，数组节点，空节点，函数组件节点**：直接放弃该节点

**创建新节点** 进入首次渲染的那个流程

尽量不要改变节点类型节点结构这样可以提高效率

### 没有找到对比目标

新的DOM树种有节点被删除

新的DOM树中有节点添加

- 创建新加入的节点
- 卸载旧加入的节点

# HOOK ~~

HOOK是React16.8.0之后出现的

组件：无状态组件（函数组件），类组件

类组件的麻烦

1. this指向问题

2. 繁琐的生命周期

3. 其他问题

HOOK专门用于增强函数组件的功能，使之理论上可以成为类组件的替代品

1. useState
2. useEffect
3. 其他...

# State HOOK

state Hook是一个在函数组件中使用的函数（useState）,用于在函数组件中使用状态

## State Hook原理

1. 当运行一个函数组件时(调用该函数)

# Context Hook

用于获取上下文数据在函数组件中替代 consumner组件
useContext(ctx) 返回一个值
# Callback Hook

用于得到一个固定引用值的函数，通常用于性能优化

该函数有两个参数：
1. 函数，useCallback会固定该函数的引用，只要依赖项没有发生变化，则始终返回之前函数的地址
2. 数组，记录依赖项

该函数返回：引用相对固定的函数地址

# Memo HOOK

用于保持一些比较稳定的数据，通常用于性能优化

# useImperativeHandle 配合ref拿到在函数中调用的方法


# react 路由 Router

如果单页应用要完成组件的切换，需实现下面2个功能

1. 根据不同的页面地址，展示不同的组件（核心）
2. 完成无刷新的地址切换

我们把实现了以上2个功能的插件，称之为路由

## React Router 这个第3放库

1. react-router :路由核心库，包含了诸多和路由功能相关的核心代码
2. react-router-dom：利用路由核心库，结合实际的页面，实现跟页面路由密切相关的功能

如果是在页面中实现路由，需要安装第2个

# 两种模式

## Hash Router
根据url中的hash值（#）来确定如何显示的组件

> 原因：hash 的变化，不会导致页面的变化
> 这种模式的兼容性最好
## Broswer History Router 浏览器历史记录路由
 html5出现后，新增了history api，从此以后，浏览器拥有了改变路劲而不刷新页面的方式
 history.pushState():向当前历史记录栈中加入一条新的记录 不会造成页面刷新
   1. 参数1： 附加的数据，自定义的数据，可以是任何类型
   2. 参数2：页面标题，目前大部分浏览器不支持
   3. 参数3： 新的地址
 history.replaceState: 将当前指针指向的历史记录替换为某个记录
   1. 参数1： 附加的数据，自定义的数据，可以是任何类型
   2. 参数2：页面标题，目前大部分浏览器不支持
   3. 参数3： 新的地址
1. 如果协议是http，端口号是80.则可以省略端口号
2. 如果协议是https，端口号是443.则可以省略端口号


# 路由组件

React-Router 为我们提供了2个重要的组件

## Router组件

它本身不做任何展示，仅提供路由模式匹配，另外，该组件会产生一个
上下文，上下文会提供一些实用的对象和方法，仅供其他相关组件使用

1. HashRouter:该组件，使用hash模式匹配
2. BrowserRouter:该组件，使用BrowserHistory模式匹配

通常情况下，Router组件只有一个将整个组件包裹起来

## Route组件

根据不同的地址展示不同的组件

重要属性

1. path:匹配路径()
   1. 默认情况下不区分大小写 可以设置sensitive 为true来区分大小写
   2. 默认情况下，只匹配初始目录，如果要精确匹配，配置exact属性为true
   3. 如果不写path，则会匹配任意路径
2. component：匹配成功后要展示的组件

3. children:
   1. 传递React元素，无论是否匹配，一定会显示children,并且会忽略component属性
   2. 传递一个函数，该函数有多个参数，这些参数来自于上下文，该函数返回react元素,则一定会显示返回的元素，并且忽略component属性

Route组件可以写到任意地方，只要保证它是Router组件的后代元素就行

## Switch组件

写到Switch组件中的Route组件，当匹配到第一个Route后，会立即停止匹配

由于Switch组件会循环所有子元素，然后让每个子元素去完成匹配，若匹配到，则渲染对应的组件，然后停止循环，因此，不能在Switch的子元素中使用除Route外的其他组件

# 路由信息

Router组件会创建一个上下文，并且会向上下文中注入一些信息

该上下文对开发者是隐藏的，Route组件若匹配到了地址，则会将这些上下文中的信息作为属性传递到组件中

## history

它并不是window.history对象，我们利用该对象无刷新跳转地址

**为啥没有直接使用history**

1. React-Router中有2种模式：hash,history 如果直接使用就只能使用history模式 所以给我们封装好可以兼容2中模式

2. 当使用window.history.pushState方法时，没有办法收到任何通知，将导致React无法知晓地址发生了变化，结果导致无法重新渲染组件

- push方法
 - 参数1：新的地址
 - 参数2：可选的，附带的数据


 我们通常使用query-string,用于解析地址栏数据

 ## match对象

 该对象中保存了，路由匹配的相关信息

 - isExact: 事实上，当前的路径和路由配置的路径是否是精确匹配的
 - params: 获取路径规则中对应的数据（动态路由）

 实际上在书写Route组件的path属性时，可以书写一个字符串正则

 react-router使用了第三方库：Path-to-RegExp ,该库的作用是，将一个字符串正则转换成一个真正的表达式


history对象

- listen：监听地址的变化，当地址发生变化时，会调用传递的函数，会返回一个函数用于取消监听
   - 参数：函数（守卫路由那边）
      - 参数1：location对象，记录当前的地址信息
      - 参数2：action 一个字符串，表示进入该地址的方式 
         - POP：出栈
            - 通过点击浏览器后退，前进
            - 通过history.go 
            - 调用hsitory.goBack
            - 调用history.goForward
         - PUSH: 入栈
            - 点击超链接
            - history.push
         - REPLACE:替换
            - history.replace
- block ：设置阻塞 this.props.history.block('msg')，也会返回一个函数用于取消阻塞
- Router 组件有个属性 getUserConfirmation 是一个函数 配合阻塞跳转的 第一个参数就是阻塞的msg传入的消息 第2个参数 callback(true) 传入true就是条转


# redux 数据的解决方案

# Redux核心概念