<template>
  <div class="menu-container">
      <RouterLink 
      v-for="item in items" 
      :key='item.link' 
      :to="{name:item.name}" 
      :exact="item.exact"
      >
          <div class="icon">
              <Icon :type='item.icon'/>
          </div>
            <span>{{item.title}}</span>
      </RouterLink>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
    components:{
        Icon
    },
    data(){
        return {
            items:[
                {
                    name:'Home',
                    link:'/',
                    title:'首页',
                    icon:'home',
                    exact:true,
                },
                {
                    name:'Blog',
                    link:'/blog',
                    title:'文章',
                    icon:'blog',
                    exact:false,
                },
                {
                    name:'About',
                    link:'/about',
                    title:"关于我",
                    icon:'about',
                    exact:true,
                },
                {
                    name:'Project',
                    link:'/code',
                    title:'项目效果',
                    icon:'code',
                    exact:true,
                },
                {
                    name:'Message',
                    link:'/message',
                    title:'留言板',
                    icon:'chat',
                    exact:true,
                }
            ]
        }
    },
    methods:{
     
    }
}
</script>

<style lang='less' scoped>
.menu-container{
    margin: 24px 0;
    a{
        padding: 0 50px;
        color: #ccc;
        display: flex;
        align-items: center;
        height: 45px;
        .icon{
            width: 24px;
        }
        &:hover{
            color: #fff;
        }
        &.router-link-active{
            background: #2d2d2d;
        }
    }
}
</style>