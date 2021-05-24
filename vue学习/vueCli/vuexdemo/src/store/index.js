import Vuex from 'vuex'
import Vue from 'vue'
import LoginUser from './loginUser'
Vue.use(Vuex);
// const store =  new  Vuex.Store({
//     // 仓库配置对象
//     state:{
//         count:0
//     },
//     mutations:{
//         increase(state){
//             state.count++;
//         },
//         decrease(state){
//             state.count--;
//         },
//         power(state,payload){
//             state.count **=payload;
//         }
//     },
//     actions:{
//         asyncIncrease(ctx){
//             setTimeout(() => {
//                 ctx.commit('increase')
//             }, 1000);
//         },
//         asyncDecrease(){
//             setTimeout(() => {
//                 this.commit('decrease')
//             }, 1000);
//         }
//     }
// });
const store =  new  Vuex.Store({
     modules:{
        LoginUser
     },
     strict:true,
    });
window.store = store;
export default store