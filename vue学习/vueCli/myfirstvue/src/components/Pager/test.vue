<template>
  <div id="app">
    <Pager @pageChange ='handlePageChange' :current='current' :total='800'/>
  </div>
</template>

<script>
import Pager from './'
export default {
  name: 'App',
  data(){
    return {
      current:1
    }
  },
  components: {
   Pager
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
