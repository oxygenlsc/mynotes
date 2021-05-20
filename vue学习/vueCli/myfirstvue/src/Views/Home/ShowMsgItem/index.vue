<template>
  <div class="show-msg-container"
   ref='container'
   @mousemove="handleMouseMove"
   @mouseleave="handleMouseLeave"
   >
      <div class="carousel-img" :style="imgPosition" ref='img'>
        <ImageLoader :src="imgMSg.src" :placeholder="imgMSg.placeholder"/>
      </div>
      <div class="title">{{imgMSg.title}}</div>
      <div class="desc">{{'加油'}}</div>
  </div>
</template>

<script>
import ImageLoader from '../../../components/ImgLoader'
export default {
    props:['imgMSg'],
    components:{
        ImageLoader
    },
    data(){
        return{
            containerSize:null,//外层容器
            innerSize:null,
            mouseX:0,
            mouseY:0,
        }
    },
    methods:{
        setSize(){
             this.containerSize = {
            width:this.$refs.container.clientWidth,
                height:this.$refs.container.clientHeight
            }
            this.innerSize = {
                width:this.$refs.img.clientWidth,
                height:this.$refs.img.clientHeight
            }
        },
        handleMouseMove(e){
            const rect = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        },
        handleMouseLeave(){
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        }
    },
    computed:{
        //得到图片坐标
        imgPosition(){
            if(!this.innerSize || !this.containerSize){
                return;
            }
            const extraWidth = this.innerSize.width - this.containerSize.width;//多出的宽度
            const extraHeight = this.innerSize.height - this.containerSize.height;//多出的高度
            const left = -extraWidth / this.containerSize.width *this.mouseX
            const top = -extraHeight / this.containerSize.height *this.mouseY
            return{
                   transform:`translate(${left}px,${top}px)`
                  }
        },
        center(){
            return {
                x:this.containerSize.width / 2,
                y:this.containerSize.height / 2
            }
        }
    },
    mounted(){
       this.setSize();
       this.mouseX = this.center.x;
       this.mouseY = this.center.y;
       window.addEventListener('resize',this.setSize);
    },
    destoryed(){
        window.removeEventListener('resize',this.setSize)
    }
}
</script>

<style lang='less' scoped>
    .show-msg-container{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        .carousel-img{
            position: absolute;
            width: 110%;
            height: 110%;
            z-index: -1;
            transition: 0.3s;
            left: 0;
            top: 0;
        }
    }
</style>