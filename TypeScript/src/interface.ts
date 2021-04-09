//约束对象
interface User {
    name:string
    age:number
    sayHello:()=>void //表示他是一个函数返回类型位void
}
//类型别名，在约束对象的情况下和接口差不多
type Users = {
    name:string
    age:number
}
let u : User = {
    name:'lsc',
    age:2,
    sayHello(){
        console.log('sb');
    }
}
//类型别名约束函数
type Condition = (n:number)=>boolean
//接口约束函数
interface Conditions{
    (n:number):boolean
}
function sum(numbers:number[],callBack:Conditions){
    let s = 0;
    numbers.forEach(n=>{
        if(callBack(n)){
            s += n;
        }
    })
    return s
}

interface A {
    T1:string
}

interface B extends A{
    T2:number
}
let dd:B = {
    T1:'s',
    T2:1
}