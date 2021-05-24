export default {
    namespaced:true,
    state:{
        userName:'lsc',
        count:0
    },
    getters:{
        status(){
            return 123
        }
    },
    mutations:{
        increase(state){
                state.count++;
            },
        decrease(state){
            state.count--;
            },
        power(state,payload){
            state.count **=payload;
            }
    },
    actions:{}
}