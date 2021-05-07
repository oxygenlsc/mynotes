export function getRandom(min:number,max:number){
    const doc = max-min;
    return Math.floor(Math.random()*doc+min);
}