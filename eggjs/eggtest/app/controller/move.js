const Controller = require("egg").Controller
const fse = require('fs-extra')
const path = require('path')
class MoveController extends Controller {
    async index() {
        // fse.copy(path.resolve(this.app.baseUrl,'./temps/a.js') ,  path.resolve(this.app.baseUrl,'./view/a.js'))
        // .then(() => console.log('success!'))
        // .catch(err => console.error(err))
        fse.readdir(path.resolve(this.app.baseUrl,'./temps'),(err,res)=>{
            console.log(res);
        })
        this.ctx.body = path.dirname(path.resolve(this.app.baseUrl,'./temps'))
        //  path.resolve(__dirname,'/temps/a.js')

    }
}

module.exports = MoveController;