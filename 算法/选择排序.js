var arr = [4,1,6,9,3,2,8,7];


function compare(a,b){
    //比较之后需要得出是否需要进行交换
    if(a<b)return true
    else return false
}


function exchange(arr,a,b){
    //将数组中ab位置里面的值进行交换
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
//选择排序，内层循环，每一圈选出一个最大的，然后放后面

function sort(arr){
    for (let i = 0; i < arr.length; i++) {
        var maxI = 0;
        for(let j=0;j<arr.length-1-i;j++){
            if(compare(arr[maxI],arr[j])){
                maxI = j;
            }
        }
        exchange(arr,maxI,arr.length-1-i);
    }
}

sort(arr);

console.log(arr);