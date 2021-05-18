import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);//使用一个插件对象
import routes from './routes'

const router =  new VueRouter({
    //配置
    routes:routes,//路由匹配规则
    mode:'history'
  })

  export default router