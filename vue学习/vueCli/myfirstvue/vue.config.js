module.exports = {
    devServer:{
        proxy:{
            "/app":{
                target:"http://oxygen.cool:9999/"
            }
        }
    },
    configureWebPack:{
        plugin:[]
    }
}