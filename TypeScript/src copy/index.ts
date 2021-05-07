// let {myname} = require('./myModules')
// console.log(123, myname)



// interface Duck{
//     sound:'gagaga',
//     swin(a:number):void
// }

// let person = {
//     name:'伪装成鸭子的人',
//     age:11,
//     sound:'gagaga' as 'gagaga',
//     swin(){
//         console.log('gagagag');
        
//     }
// }
// //鸭子辨型法
// let duck:Duck = person;


class  User {
    readonly id:number
    // name:string //
    private _age:number //配合set get 用于控制属性的读取和赋值
    gender:'男'|'女'
    pid?:string
    private curi:number = 1
    constructor(public name:string,_age:number,gender:'男'|'女' = '男'){
        this.id = Math.random()
        // this.name = name;
        this._age = _age;
        this.gender = gender;
    }
    set age(value:number){
        if(value>100){
            this._age =  100
        }else if(value<0){
            this._age = 1
        }else{
            this._age = value
        }
    }
    get age(){
        return this._age;
    }
    publish(){
        console.log(this.curi);
    }
}

const users = new User('lsc',23);
users.age = -10;
users.publish();
console.log(users);

//泛型
function take<T>(arr:T[],n:number):T[]{
    if(n>=arr.length){
        return arr;
    }
    const newArr:T[] = [];
    for(let i=0;i<n;i++){
        newArr.push(arr[i]);
    }
    return newArr
}
// take<string>([1,3,4,5.6,5],3)
const newArrs = take<number>([1,3,4,5.6,5],3)

console.log(newArrs);
//多泛型
function minxinArray<T,G>(arr:T[],arr2:G[]):(T|G)[]{
    if(arr.length !=arr2.length){
        throw new Error('数组长度不等')
    }
     let result:(T|G)[] = [];
     for (let i = 0; i < arr.length; i++) {
       result.push(arr[i]);
       result.push(arr2[i])
     }
    
    return result;
}
