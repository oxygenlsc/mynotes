var arr = [1,2,3,4,5,6]

function bianArr(arr) {
    if(arr == null) return;
    for(var i = 0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

function Node(val){
    this.value = val;
    this.next = null;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);

a.next = b;
b.next = c;
c.next = d;


function bl(root){
    if(root == null)return;
    console.log(root.value);
    bl(root.next);
}
bl(a)