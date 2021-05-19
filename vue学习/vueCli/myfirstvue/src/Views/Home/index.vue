<template>
  <div class="home-container" >
    <ul>
      <li v-for="item in banners" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import {getBanner} from '../../api/banner'
export default {
data(){
  return {
    banners:[]
  }
},
async created(){
  const r = await getBanner()
  this.banners = r;
},

mounted(){
  //直接操作dom就要在这个里面操作了
},

}
</script>

<style>

</style>