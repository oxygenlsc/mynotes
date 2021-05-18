<template>
  <div class="image-loader-container">
      <img v-if="!everythingDown" :src="placeholder"  class="placeholder" >
      
      <img  @load="handleLoad" :src="src" :style="{ opicaty:originOpicaty,transition: `${duration}ms liner`}">
  </div>
</template>

<script>
export default {
    props:{
        src:{
            type:String,
            required:true
        },
        placeholder:{
            type:String,
            required:true,
        },
        duration:{
            type:Number,
            default:500
        }
    },
    computed:{
        originOpicaty(){
            return this.originLoaded?1:0
        }
    },
    data(){
        return {
            originLoaded:false, //原图是否加载完成
            everythingDown:false
        }
    },
    methods:{
        handleLoad(){
            this.originLoaded = true;
            setTimeout(() => {
             this.everythingDown = true
             this.$emit('load');
            }, this.duration);
            console.log('原图加载完成');
        }
    }
}
</script>

<style lang='less' scoped>
    .image-loader-container{
        position: relative;
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            object-fit: cover;
        }
        .placeholder{
            filter: blur(2vw);
        }
    }
</style>