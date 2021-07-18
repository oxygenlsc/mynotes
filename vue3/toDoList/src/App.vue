<template>
  <p>
    <button @click="increase">count:  {{ count }}</button> 
  </p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
 setup(){
  //  console.log("所有生命周期钩子函数之前调用");
  //  this指向undefined
  let count  = 0;
  const increase = ()=>{
    count++
  }
   return {
     count,
     increase
   }
 }
}
</script>
