//导出指令的配置对象 有5个钩子函数
//每个钩子函数在调用时，vue都会向其传递一些参数，其中最重要的是前2个
// export default {
//     bind(el,binding){
//         //el是绑定元素真实的dom
//         //bing是指令的信息一些
//         console.log('bind',el,binding);
//             //根据binding.value的值创建或删除img元素
//     },
   
//     update(){
//         console.log('update')
//         //根据binding.value的值创建或删除img元素

//     }
// }
import LoadingUrl from '../assets/loading.gif'
import styles from './loading.module.less'
function getLoadingImg(el){
      return  el.querySelector("img[data-role=loading]")
}

function createLoadingImg(){
    const img = document.createElement('img');
    img.dataset.role = 'loading'
    img.src = LoadingUrl;
    img.className = styles.loading
    return img;
}
//也可以直接导出一个函数，代表bind 和update会调用

export default function(el,binding){
    const curimg = getLoadingImg(el)
    if(binding.value){
        if(!curimg){
            const img = createLoadingImg()
            el.appendChild(img)
        }
    }else{
        if(curimg){
            curimg.remove()
        }
    }
}