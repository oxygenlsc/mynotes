abstract class animals {
        abstract type:string;
        constructor(
          public  name:string,
          public  age:number
        ){

        }
        sayHello(){
            console.log(`my name is ${this.name} my type is ${this.type}`)
        }
}

// class Lion extends animals {
//     type: string = '狮子'

//     singleFire(){
//         console.log(`${this.name} 穿越了单火圈`);
//     }
//     DeFire(){
//         console.log(`${this.name} 穿越了双火圈`);
//     }
    
// }
// class Tiger extends animals {
//     type: string = '老虎'
//     singleFire(){
//         console.log(`${this.name} 穿越了单火圈`);
//     }
//     DeFire(){
//         console.log(`${this.name} 穿越了双火圈`);
//     }
// }
// class Monkey extends animals {
//     type: string = '猴子'
//     zougangsi(){
//         console.log(`${this.name} 走钢丝`);
//     }
// }
// class Dog extends animals {
//     type: string = '狗'

//     jiao(){
//         console.log(`${this.name} 叫了`);
//     }
    
// }


interface  IFireShow {
    singleFire():void
    doubleFire():void
}

interface WisdomShow {
    jiao():void
}

interface BalanceShow {
    zougangsi():void
}
class Lion extends animals implements IFireShow {
   
    type: string = '狮子'

    singleFire(){
        console.log(`${this.name} 穿越了单火圈`);
    }   
    doubleFire(): void {
        throw new Error("Method not implemented.");
    } 
}
class Tiger extends animals  implements IFireShow{
   
    type: string = '老虎'
    singleFire(){
        console.log(`${this.name} 穿越了单火圈`);
    }
    doubleFire(): void {
        throw new Error("Method not implemented.");
    }
}
class Monkey extends animals implements BalanceShow , WisdomShow{
    jiao(): void {
        throw new Error("Method not implemented.");
    }
    zougangsi(): void {
        throw new Error("Method not implemented.");
    }
    type: string = '猴子'
}
class Dog extends animals implements WisdomShow {
    type: string = '狗'

    jiao(){
        console.log(`${this.name} 叫了`);
    }
    
}