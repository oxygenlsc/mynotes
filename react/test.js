// function addpoint(number){
//     let s = number+''; 
//     // s=  s.split('.')
//     let reg = /\B(?=(\d{3})+$)/g 
//     s=s.replace(reg,',')
//     return s
// }
// console.log(addpoint(1232)); 

function deepClone(target){
    if(typeof target == 'object'){
        let newobj = {};
        for (const key in target) {
                const el = target[key];
                if(typeof el == 'object'){
                    newobj[key] =   deepClone(el)
                }else{
                    newobj[key] = el
                }
        }

        return newobj
    }else{
        throw new Error('请传入一个对象')
    }
}
let obj = {
    a:1,
    b:2,
    c:{
        name:'lsc'
    },
    d:()=>{console.log(123);}
}
let newobj =  deepClone(obj)
console.log(newobj===obj);