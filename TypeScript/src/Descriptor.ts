export function classDescriptor(description:string){
    return function(target:Function){
        target.prototype.$classDescription = description;
    }
}

export function propDescriptor(str:string){
    return function(target:any,key:string){
        //把所有的属性信息保存到该类的原型中
        if(!target.$propDescriptions){
            target.$propDescriptions = [];
        }else{
            target.$propDescriptions.push({
                [key]:str
            })
        }
    }
}

export function printObj(obj:any){
        console.log(obj.$classDescription)
        console.log(obj.$propDescriptions)

}
