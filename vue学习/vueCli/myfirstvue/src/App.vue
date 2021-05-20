<template>
  <div id="app" class="app-container">
    <Layout>
       <template #left>
         <div class="aside">
             <SideAside/>
         </div>
          </template>
          <div class="main">
            <RouterView/>
          </div>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout'
import SideAside from './components/SideAside'
export default {
  name: 'App',
  data(){
    return {
      current:1
    }
  },
  components: {
    Layout,
    SideAside
  },
  computed:{
  
  },
  methods:{
    handlePageChange(newpage){
      this.current = newpage
    }
  }
}
</script>

<style lang='less' scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
.app-container{
  position: fixed;
  width: 100%;
  height: 100%;
  // background-color: red;
  .aside{
    width: 250px;
    height: 100%;
  }
  .main{
    width: 100%;
    height: 100%;
    
  }
}
</style>
