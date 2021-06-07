
import express from "express"
import render from './render'

const app = express();
app.use(express.static("../../public"))
app.get('*',render)

app.listen(8080,()=>{
    console.log('服务器启动 8080');
})