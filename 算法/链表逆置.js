function Node(value){
    this.value = value;
    this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function nizhi(root){
    if(root.next.next==null){//代表当前节点是倒数第二个节点
        root.next.next = root;//让最后一个节点指向自己
        return root.next;
    }else {
        var result =  nizhi(root.next);//递归调用最后来到出口得到根节点返回给result
        root.next.next = root;//将当前节点的下一个节点的next指向当前节点
        root.next = null;//让当前节点的next指向空
        return result; //这个必须有 获取递归出口的值根节点
    }
}

console.log(nizhi(node1));
