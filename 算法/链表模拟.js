var a = {
    value:2,
    next:b
}
var b = {
    value:4,
    next:null
}
//迭代器


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

// 链表的遍历 

function bl(root){
        let temp  = root;
        while(true){
            if(temp !=null){
                console.log(temp.value);
            }else{
                break;
            }
             
            temp = temp.next;
        }
}
bl(a)
console.log(a.value);
console.log(a.next.value);