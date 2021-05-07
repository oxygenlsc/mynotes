let name:string;
// name = 222;
function add(a:number,b:number):number{
    return a+b 
}

let num = add(2,1)

let names:string|undefined;
let arr:number[];

arr = [1]
names = 'ssss'
if(typeof names === 'string'){
  let temp =  names.concat('1111');
  console.log(temp);
  
}


function printMeun():void{
    console.log(1,2);
    
}
let a = printMeun();

let c:'A'

let user:{
    name:string
    age:number
}

user = {
    name:'1',
    age:20
}

let ddd:any = 'dddddd';

let nums:number = ddd

// 函数重载
/**
 * 得到a*b的结果
 * @param a 
 * @param b 
 */
function combine(a:number,b:number):number;
/**
 * 得到a和b拼接的结果
 * @param a 
 * @param b 
 */
function combine(a:string,b:string):string;
function combine(a:number|string,b:number|string):number|string{
    if(typeof a === 'number' && typeof b ==='number'){
        return a*b
    }else if(typeof a === 'string' && typeof b ==='string'){
        return a+b
    }
    throw new Error("a和b必须是相同的类型");
    
}

const result = combine(1,1)


// 可选参数

function sum(a:number,b:number,c?:number){
//表示c可传可不传
// 可选参数只能出现在最后一个
}

sum(3,4)

// 枚举

//当这个Gender修改时 后面变量的值也要跟着修改产生大量的修改
type Gender = '男'|'女'

let gender : Gender;

gender = '男'


enum  Genders{
    male = '男',
    female = '女'
}

let gd:Genders;

gd = Genders.male;