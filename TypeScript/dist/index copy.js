let name;
// name = 222;
function add(a, b) {
    return a + b;
}
let num = add(2, 1);
let names;
let arr;
arr = [1];
names = 'ssss';
if (typeof names === 'string') {
    let temp = names.concat('1111');
    console.log(temp);
}
function printMeun() {
    console.log(1, 2);
}
let a = printMeun();
let c;
let user;
user = {
    name: '1',
    age: 20
};
let ddd = 'dddddd';
let nums = ddd;
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error("a和b必须是相同的类型");
}
const result = combine(1, 1);
// 可选参数
function sum(a, b, c) {
    //表示c可传可不传
    // 可选参数只能出现在最后一个
}
sum(3, 4);
let gender;
gender = '男';
var Genders;
(function (Genders) {
    Genders["male"] = "\u7537";
    Genders["female"] = "\u5973";
})(Genders || (Genders = {}));
let gd;
gd = Genders.male;
