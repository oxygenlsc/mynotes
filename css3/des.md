# css3 选择器

E + F ：下一个满足条件的兄弟元素条件
E ~ F ：下一组满足条件的兄弟元素条件

E[attr=‘’] : 属性选择器 里面是条件
E[class^='a'] : 类以a开头的
E[class$='a'] : 类以a结尾的
E[class*='a'] : 类里面只要存在a就可以

- 伪元素选择器

input::placeholder{
    color:red
}//支持不好

E::selection{
    文字被选中的样式但是只能设置3个属性
    color
    background-color
    text-shadow
}

- 伪类选择器

E:not(.test){
不是test类选择器的E
}
E:not([class]){
没有class的E
}
E:not(:last-of-type){
    除了最后一个不作用
}

:root{
    选择根节点 和html{}是一样的
}

**会受到其他元素的影响下面的写法并不常用**
E:first-child{
    E的第一个
}

E:last-child{
    E是他父级元素的最后一个
}
E:only-child{
    E是他他父级元素的唯一的元素会选中
}

E:nth-child(){
    E是他父级元素的满足括号里的条件的会选中
    括号里添加的东西
    2n 偶数
    2n + 1 奇数
}

E:nth-last-child(){
    E是他父级元素的满足括号里的条件的会选中
    倒着查的
    括号里添加的东西
    2n 偶数
    2n + 1 奇数
}

**不会受到其他元素的影响下面的写法并不常用**

E:first-of-type{
    E的这个类型的第一个
}
E:last-of-type{
    E的这个类型的最后一个
}
E:nth-of-type(){
    括号里添加的东西
    2n 偶数
    2n + 1 奇数
}
E:nth-of-last-type(){
    倒着查
    括号里添加的东西
    2n 偶数
    2n + 1 奇数
}

# border ~~

border-radius ：左上 右上  右下 左下

border-radius ：10px 20px 30px 40px / 10px 20px 30px 40px  
高级写法  左边水平  右边垂直方向

box-shadow : 水平偏移量 垂直偏移量 模糊值 传播距离  颜色

inset 内阴影  不写就是外阴影


border-image-source:url(),也可以写渐变色 linear-gradient()
border-image-slice:10

# background ~~


# text ~~

1. text-shadow  x y blur color


