<template>
   <div class="test-container">
       <Empty/>
   </div>
</template>

<script>
import Empty from './'
export default {
    components:{
        Empty
    }
}
</script>

<style>
.test-container{
    width: 500px;
    height: 400px;
    border:1px solid red;
    position: relative;
}
</style>