<template>
  <div class="test-container">
      <SideAside/>
  </div>
</template>

<script>
import SideAside from './'
import '@/styles/global.less'
export default {
    components:{
        SideAside
    }
}
</script>

<style>
    .test-container{
        width: 250px;
        height: 600px;
        border: 1px solid red;
        margin: 0 auto;
    }
</style>