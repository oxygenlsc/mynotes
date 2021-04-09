var arr = [4,1,6,9,3,2,8,7]
//可以直接使用sort方法 console.log(arr.sort());
// function getMin(arr){
//     // arr = [...arr];
//     if(arr == null || arr.length==0)return;
//     var index=-1;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]!=null && arr[i]<arr[index]||arr[i]!=null && index == -1){
//             index = i
//         }
//     }
//     var result = arr[index]
//     arr[index] = null;
//     return result
// }
// function sort(arr){
//     var newArr = new Array(arr.length);
//     for (let i = 0; i < newArr.length; i++) {
//       newArr[i] = getMin(arr)
//     }
//     return newArr
// }

//上面的普通想法

// 下面的冒泡排序

//排序不是比较大小，排序的本质是比较和交换

function compare(a,b){
    //比较之后需要得出是否需要进行交换
    if(a>b)return true
    else return false
}

function exchange(arr,a,b){
    //将数组中ab位置里面的值进行交换
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sort(arr){
    //这个sort可以是冒泡排序也可以是选择排序也可以是其他排序
    for(var i = 0 ;i<arr.length ; i++){
        for (let j = 0; j < arr.length-i-1; j++) {
            if(compare(arr[j],arr[j+1])){
                exchange(arr,j,j+1)
            }
        }
    }
  
}
sort(arr);
console.log(arr);