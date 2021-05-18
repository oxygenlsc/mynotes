<template>
  <img :src="url" class="avatar-container" :style="{width:size+'px',height:size+'px'}" alt="">
</template>

<script>
export default {
    // props:["url"],数组式
    props:{
        url:{
            type:String,
            required:true
        },//url必须是字符串且比传
        size:{
            type:Number,
            default:150//默认值
        },
    }//对象式
}
</script>

<style scoped>
.avatar-container{
    display: block;
    border-radius: 50%;
    object-fit: cover;
}
</style>