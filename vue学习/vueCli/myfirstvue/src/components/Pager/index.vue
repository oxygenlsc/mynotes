<template>
    <!-- 只有总页数大于1时才显示 -->
    <div class="pager-container" v-if='pageNumber > 1'>
        <a  @click="handelClick(1)" :class="{disabled:current === 1}">|&lt;&lt;</a>
        <a  @click="handelClick(current-1)" :class="{disabled:current === 1}">&lt;&lt;</a>
        <a  @click="handelClick(n)" v-for='(n,i) in numbers' :key='i' :class="{active:n===current}" >{{n}}</a>
        <a  @click="handelClick(current+1)" :class="{disabled:current === pageNumber}">&gt;&gt;</a>
        <a  @click="handelClick(pageNumber)"  :class="{disabled:current === pageNumber}">&gt;&gt;|</a>
    </div>
</template>

<style lang="less" scoped>
@import '~@/styles/var.less';
.pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a{
        color:@primary;
        margin: 0 6px;
        cursor: pointer;
        &.disabled {
            color: @lightWords;
            cursor: not-allowed;
        }
        &.active {
            color: @words;
            font-weight: bold;
            cursor: text;
        }
    }
}
</style>

<script>
export default {
props:{
    current:{
        type:Number,
        default:1
    },
    total:{
        type:Number,
        default:0
    },
    limit:{
        type:Number,
        default:10
    },
    visibleNumber:{
        type:Number,
        default:10
    }
},
computed:{
    pageNumber(){
      return Math.ceil(this.total / this.limit) 
    },
    //得到页吗中最小数字
    visibleMin(){
        let min =  this.current - Math.floor(this.visibleNumber/2) ;
        if(min<1){
            min = 1;
        }
        return min
    },
    //得到页码最大数字
    visibleMax(){
        let max = this.visibleMin + this.visibleNumber - 1;
        if(max>this.pageNumber){
            max = this.pageNumber
        } 
        return max
    },
    numbers(){
        let nums = [];
        for (let i = this.visibleMin; i <= this.visibleMax; i++) {
           nums.push(i)
        }
        return nums;
    }
},
methods:{
    handelClick(newpage){
        //抛出事件
        if(newpage<1){
            newpage = 1;
        }
        if(newpage>this.pageNumber){
            newpage = this.pageNumber;
        }
        if(newpage === this.current){
            return;
        }
        this.$emit("pageChange",newpage)
    }
}
}
</script>
