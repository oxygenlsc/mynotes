const Controller = require("egg").Controller
const {root,chart} = require('../utils/echarts')
const fs = require('fs');
class HomeController extends Controller {
    async index() {
        console.log(this.config.$apiBase)
        const data =  await this.app.axios.get('http://oxygen.cool:9999/app/blog/selectBlogByType?type=id&id=1')
        // console.log(data.data);
       await this.ctx.render("home",{title:data.data.data.Bcontent})
//    const html =  await this.ctx.renderView("home",{title:"服务端渲染的页面"})
//    this.ctx.body = html
    }
    async charts() {
    //    const res = await fs.writeFileSync('basic.jpg', root.querySelector('svg').outerHTML, 'utf-8');
       var strToBase64 = new Buffer(root.querySelector('svg').outerHTML).toString('base64');
    //  const baseT =  root.querySelector('canvas')
    //    console.log(baseT)
       await this.ctx.render("home",{title:`data:image/svg+xml;base64,${strToBase64}`})
    //    chart.dispose();
    }
}

module.exports = HomeController;