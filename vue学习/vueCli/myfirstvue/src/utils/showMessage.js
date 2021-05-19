import getComponentRootDom from './getComponentsRootDom';
import Icon from '@/components/Icon';
import styles from './showMessage.module.less'
/**
 * 弹出消息
 * @param {*String} content 消息内容
 * @param {*String} type 消息类型 info  error  success  warn
 * @param {*htmlElement} container 
 */
export default function(options = {}){
    const content = options.content || '';
    const type = options.type || 'info';
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    //创建消息元素
    const div = document.createElement('div');
    const iconDom = getComponentRootDom(Icon,{type})
    div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><div>${content}</div>`
    const typeClassName = styles[`message-${type}`]
    div.className = `${styles.message} ${typeClassName} `;
    //将div加入到容器中
     //容器的position是否改动过
     if(options.container){
        if(getComputedStyle(container).position === 'static'){
            container.style.position = 'relative';
        }
     }
    container.appendChild(div);
    //浏览强行渲染
    div.clientHeight;//读取这个元素的尺寸和大小，就会导致重排 reflow
    //回归到正常位置
    div.style.opacity= 1;
    div.style.transform = `translate(-50%,-50%)`;
    setTimeout(() => {
        div.style.opacity= 0;
        div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
        div.addEventListener('transitionend',function(){
            div.remove();
            options.callback&&options.callback()
        },{once:true})
    }, duration);
}