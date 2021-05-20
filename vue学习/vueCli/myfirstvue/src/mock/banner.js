import Mock from 'mockjs'
import pl from '../assets/4.jpg'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'

Mock.mock('/api/banner','get',{
    code:0,
    msg:'',
    data:[
        {
            id:'1',
            title:'what1',
            src:img1,
            placeholder:pl
        },
        {
            id:'2',
            title:'what2',
            src:img2,
            placeholder:pl
        },
        {
            id:'3',
            title:'what3',
            src:img3,
            placeholder:pl
        }
    ]
})