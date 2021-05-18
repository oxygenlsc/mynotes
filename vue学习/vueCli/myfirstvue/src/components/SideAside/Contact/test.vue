<template>
  <div class="test-container">
      <Contact/>
  </div>
</template>

<script>
import Contact  from "./";
import "@/styles/global.less"
export default {
    components:{
        Contact,
    },
}
</script>

<style>
    .test-container{
        width: 200px;
        height: 600px;
        border: 2px solid red;
        margin: 0 auto;
        margin-top: 300px;
    }
</style>