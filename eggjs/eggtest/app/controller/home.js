const Controller = require("egg").Controller

class HomeController extends Controller {
    async index() {
        console.log(this.config.$apiBase)
        const data =  await this.app.axios.get('http://oxygen.cool:9999/app/blog/selectBlogByType?type=id&id=1')
        // console.log(data.data);
       await this.ctx.render("home",{title:data.data.data.Bcontent})
//    const html =  await this.ctx.renderView("home",{title:"服务端渲染的页面"})
//    this.ctx.body = html
    }
}

module.exports = HomeController;