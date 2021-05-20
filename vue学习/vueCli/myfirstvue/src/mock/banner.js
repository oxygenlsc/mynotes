import Mock from 'mockjs'

Mock.mock('/api/banner','get',{
    code:0,
    msg:'',
    data:[
        {
            id:'1',
            title:'what1'
        },
        {
            id:'2',
            title:'what2'
        },
        {
            id:'3',
            title:'what3'
        }
    ]
})