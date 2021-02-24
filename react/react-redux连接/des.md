# react-redux 官方出品的库

- React: 组件化的UI界面处理方案
- React-Router： 根据地址匹配路由，最终渲染不同的组件
- Redux: 处理数据以及数据的变化方案（主要用于处理共享数据）



react-redux ：连接redux和react的

- Provider组件：没有任何UI界面，是将redux的仓库放到一个上下文中

- connect: 高阶组件用来连接仓库和组件的
    - 细节1 如果对返回的容器组件加上额外的属性，则这些属性会直接传递到展示的组件
    - mapStateToProps: 是connect的第一个参数是一个函数可以有2个参数
    第一个是整个仓库的数据，第二个是直接写在组件上的属性，你返回的值就是你传入到这个组件的数据。
    - connect的第2个参数是一个函数返回一个对象 对象里面是函数对应组件里面的事件函数
    也可以传一个对象对象里面是action创建函数 一般不用不灵活
原理就是将仓库中的数据放到上下文中 页面刷新的store.subscribr 添加了监听器仓库数据改变就触发这个然后改仓库的数据实现页面刷新

connect第3个参数 mergeProps 是一个函数 有3个参数
- stateProps 参数1  该参数的值来自于connect第一个参数返回的值
- dispatchProps 参数2 该参数的值来自于connect第二个参数返回的值
- ownProps 参数3 组件使用者传递的信息
- 返回值：一个对象，该对象的属性最终会被传递到包装的组件中

connect第4个参数 是一个配置对象 是一个对象


# redux如何和router结合
## 第3方库（connected-react-router）