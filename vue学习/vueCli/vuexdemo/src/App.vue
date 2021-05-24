<template>
  <div id="app">
    {{$store.state.LoginUser.count}}
    {{loading}}
    {{other}}
     <button @click="handeIncrease">+</button>
     <button @click="handeDecrease">-</button>
    <button @click="asynhandeIncrease">异步+</button>
     <button @click="asynhandeDecrease">异步-</button>
  </div>
 
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'App',
  components: {
  },
  computed:{
    ...mapState({
    loading:(state)=> state.LoginUser.userName
  }),
    other(){
      return 123
    }
  },
  methods:{
    handeIncrease(){
      this.$store.commit('LoginUser/increase')
    },
    handeDecrease(){
      this.$store.commit('LoginUser/decrease')
    },
    asynhandeIncrease(){
    this.$store.dispatch('LoginUser/asyncIncrease')
    },
    asynhandeDecrease(){
    this.$store.dispatch('LoginUser/asyncDecrease')

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
