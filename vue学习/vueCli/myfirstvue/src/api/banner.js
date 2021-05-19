// fetch('http://oxygen.cool:9999/app/blog/selectBlogByPage?page=1&limit=10').then(r=>r.json()).then(data=>{console.log(data)});
import request from './request'
export async function getBanner(){
  const resp =  await request.get('/api/banner')
  return resp
}
