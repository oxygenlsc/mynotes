// function test(str:string){
//    return function(target:new (...args:any[]) => object){

import { classDescriptor, printObj, propDescriptor } from "./Descriptor";

//    }
// }

// @test('这是一个类')
// class User {
//     // loginid:string; //必须是3到5个字符
//     loginPwd:string;//必须是6到12个字符
//     age:number;//必须是数字，必须是0到100的数字
//     gender:"男" | '女'

//     constructor(public loginid:string){

//     }
// }


// //多个装饰器

// type constructor = new (...args:any[]) => object
// function d1(target:constructor){
   
//  }
// function d2(target:constructor){

// }

// function d(target:any,key:string){
//     console.log(target,key);
    
// }
// function dm(){
//     return function(target:any,key:string,descriptor:PropertyDescriptor){
//         descriptor.enumerable = true//这个方法可以产于遍历
//     }
// }
//  @d1
//  @d2
//  class User {
//      // loginid:string; //必须是3到5个字符
//      loginPwd:string;//必须是6到12个字符
//      @d
//      age:number;//必须是数字，必须是0到100的数字
//      @d
//      gender:"男" | '女'
 
//      constructor(public loginid:string){
 
//      }

//      @dm()
//      method1(){

//      }
//  }
 
@classDescriptor('用户')
class User {
    @propDescriptor('账号')
    loginId: string
    @propDescriptor('密码')
    loginPwd: string
}

const u = new  User();

printObj(u);