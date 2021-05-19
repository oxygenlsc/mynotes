import axios from 'axios'
import ShowMessage from '../utils/showMessage'
const ins = axios.create();
ins.interceptors.response.use(function(resp){
    if(resp.data.code !==0){
        ShowMessage({
            content:resp.data.msg,
            type:'error'
        })
    return null
    }
    return resp.data.data
})

export default ins