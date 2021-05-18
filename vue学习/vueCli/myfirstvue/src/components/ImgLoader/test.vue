<template>
   <div class="test-container">
       <ImgLoader
            src = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3231005548,635944634&fm=26&gp=0.jpg"
            placeholder = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1999921673,816131569&fm=26&gp=0.jpg"
            @load="handleLoaded()"
            :duration='1000'
       />
   </div>
</template>

<script>
import ImgLoader from './'
export default {
    components:{
        ImgLoader
    },
    methods:{
        handleLoaded(){
            console.log("imgloader");
        }
    }
}
</script>

<style>
.test-container{
    width: 500px;
    height: 400px;
    border:1px solid red;
    margin: 0 auto;
}
</style>