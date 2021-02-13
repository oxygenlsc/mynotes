# Action

1. action是一个平面对象（plain-object）
    1. 它的__proto__指向Object.prototype
2. 通常用payload作为附加数据
3. action中必须有type属性，该属性用于描述操作的类型
    1. 没有对type的类型做出要求
4. 在大型项目中，由于操作类型非常多，为了避免硬编码，会将action的类型存放到一个或者单独的文件中
5. 为了方便传递action 通常会使用action创建函数去创建一个action
    1. action创建函数应为无副作用的纯函数
        1. 不能以任何形式改变参数
        2. 不可以有异步
        3. 不可以改变外部的数据
6. 为了方便利用action创建函数来分发action,redux提供了一个函数```bindActionCreaters```,该函数用于增强action创建函数的功能，使用它不仅可以创建action，并且创建后会自动完成分发


# Reducer

Reducer是用于改变数据的函数

1. 一个数据仓库，有且仅有一个reducer，一个工程只有一个仓库，因此一个系统只有一个reducer
2. 为了方便管理，通常会将reducer放到单独的文件夹
3. reducer被调用的时机
    1. 通过store.dispatch, 分发了一个action，此时会调用reducer
    2. 当创建一个store的时候，会调用一次reducer
        1. 可以利用这一点，用reducer初始化状态
        2. 创建仓库时，不传递默认状态
        3. 讲reducer的参数state设置一个默认值
4. reducer内部通常使用switch来判断type值
5. **reducer必须是一个没有副作用的纯函数**
    > 为什么需要纯函数
    1. 纯函数有利于测试和调试
    2. 有利用还原数据
    3. 有利于将来和react结合时的优化
    > 具体要求
    1. 不能改变参数，因此若要状态变化，必须得到一个新的状态
    2. 不能有异步
    3. 不能对外部环境照成影响
6. 由于在大中型项目中，操作比较复杂，数据结构也比较复杂，因此需要对reducer进行细分。我们自己写了一个方法用于合并reducer
    1. redux也提供了方法，可以帮助我们更加方便的合并reducer,combineReducer:合并reducer，得到一个新的reducer，该新的reducer管理一个对象，该对象中的每一个属性交给对应中的reducer管理


# store 用于保存数据的是数据仓库

通过createStore方法创建的对象

该对象的成员：

- dispatch : 分发一个action
- getState : 得到仓库中当前的状态
- replaceReducer : 替换掉当前的reducer
- subscribr: 注册一个监听器，监听器是一个无参函数，该分发一个action后会触发监听器，该函数会返回一个函数用于取消监听
- Symbol('obseervable')

# Redux中间件(Middleware)

中间件：类似于插件，可以在不影响原本功能，并且不改动原本代码的基础上，对其功能进行增强。在redux中，中间件主要用于增强dispatch功能

- 中间件本身是一个函数，该函数接收一个state参数，表示创建的仓库，该仓库并非一个完整的仓库对象，仅包含getState,dispatch.该函数运行的时间，是在仓库创建之后运行。
    - 由于创建仓库后需要自动运行设置的中间件函数，因此需要在创建仓库时，告诉仓库有那些中间件
    - 需要调用applyMiddleware,将函数的返回结果作为createStore的第二或第三个参数。
- applyMiddleware函数用于记录有那些中间件

# 第3方中间件

1. 日志记录 ： redux-logger

2. 副作用处理:

# 利用中间件进行副作用处理

- redux-thunk

- redux-promise

- redux-saga

# redux-thunk 

直接应用后可以在action里面返回一个函数直接写副作用了

# redux-saga

> redux-saga 是建立在es6的生成器基础上，要熟练的使用saga，必须理解生成器。

> 要理解生成器，必须先理解迭代器和可迭代协议
> 中文文档地址：https://redux-saga-in-chinese.js.org/


- 纯净
- 强大
- 灵活

在saga任务中，如果yield了一个普通数据，saga不做任何处理，仅仅将数据传递给，yield表达式，因此在saga中yield一个普通数据没有意义


saga需要你在yield后面放上一些合适的saga指令，如果放的是指令，saga中间件会根据不同的指令进行特殊处理，以控制整个任务的流程。

每个指令本质上就是一个函数，该函数调用后，会返回一个指令对象，saga会接收到该指令对象，进行各种处理


**一旦saga任务完成（生成器函数），则saga中间件一定结束**
**指令前面必须使用yield，以确保该指令的返回结果被saga控制**
- take 指令[阻塞]：用来监听某个action,如果发生了某一个anction，则会进行下一步处理。take指令仅监听一次

- all指令：[阻塞] 该函数传入一个数组，数组中放入生成器，saga会等待所有的生成器全部完成后才会进一步处理

- takeEvery指令： 不断的监听某一个action， 当某一个action到达之后运行函数

- delay指令 ：[阻塞]阻塞指定的毫秒数

- put指令：相当于dispatch

- call指令：用于副作用函数调用，通常是异步的函数调用


- apply指令：和call一样传参不一样

- select指令：获取仓库里面的值