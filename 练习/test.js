//函数柯里化 curry(1)(2)(3)

function a(a,b,c){
    return a+b+c;
}

function curry(func){
    var arg = Array.prototype.slice.call(arguments,1);
    var that = this;
           return function(){
               var curArgs = Array.from(arguments);
               var totleArgs = arg.concat(curArgs);
               if(totleArgs.length>=func.length){
                  return func.apply(null,totleArgs)
               }else{
                   totleArgs.unshift(func);
                 return  that.curry.apply(that,totleArgs)
               }
           }
}

// function currys(func){
//     var arg = Array.prototype.slice(arguments,1);
//     var that = this;
//     return function(){
//         var curArgs = Array.from(arguments);
//         var totalArgs =  arg.concat(curArgs);
//         if(totalArgs>=func.length){
//             return func.apply(null,totalArgs)
//         }else{
//             totalArgs.unshift(func);
//             return that.curry.apply(that,totalArgs)
//         }
//     }

// }