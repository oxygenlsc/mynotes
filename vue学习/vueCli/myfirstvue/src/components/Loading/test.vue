<template>
  <div style="position:relative">
      <Loading v-if='isloading'/>
      <button @click="()=>{
          isloading=!isloading
          }">切换、显示</button>
  </div>
</template>

<script>
import Loading from './'
export default {
    components:{
        Loading
    },
    data(){
        return {
            isloading:false
        }
    }
}
</script>

<style>

</style>