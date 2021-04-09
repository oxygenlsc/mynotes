//简单快速排序 这个性能极差

let arr = [5,8,4,6,1,5,2];


function quickSort(arr){
    //选个值小的占左边大的占右边
    if(arr == null || arr.length == 0){
        return [];
    }
    var leader = arr[0];
    var left = [];var right = [];
    for (var i = 1; i < arr.length; i++) {
        if(arr[i]<leader)left.push(arr[i]);
        else right.push(arr[i])
    }
    left = quickSort(left);
    right = quickSort(right)
    left.push(leader);
    return left.concat(right)
}

// console.log(quickSort(arr));
//标准的快速排序

function swap(arr,a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] =  temp;
}

function realQuickSort(arr,begin,end){
        if(begin>=end - 1) return;
        var left  = begin;
        var right = end;
        do {
            do left++; while (left<right && arr[left] < arr[begin]);
            do right--; while (right>left && arr[right] > arr[begin]);
            if(left < right) swap(arr,left,right)
        }while(left<right);
        var swapPoint = left == right ? right -1 :right;
        swap(arr,begin,swapPoint)
        realQuickSort(arr,begin,swapPoint);
        realQuickSort(arr,swapPoint+1,end);

}

function quickSortUse(arr){
    realQuickSort(arr,0,arr.length);
}
quickSortUse(arr)
console.log(arr);

