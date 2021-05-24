import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);//使用一个插件对象
import routes from './routes'

const router =  new VueRouter({
    //配置
    routes:routes,//路由匹配规则
    mode:'history'
  })
  router.beforeEach((to,from,next)=>{
      //每当导航切换时（包含刷新页面的第一次）会运行
      //from ：之前的路由对象（this.$routes）
      //to:即将进入的路由对象（this.$route）
      //next:确认导航的一个函数（无参），调用该函数 就会直接进入to
      //传入参数会根据参数跳转页面
      
      next()
      });
  export default router

