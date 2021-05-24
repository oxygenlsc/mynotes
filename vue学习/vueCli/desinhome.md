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