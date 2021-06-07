const path = require("path");
const nodeExternals = require("webpack-node-externals")
module.exports = {
    mode:"development",
    devtool:"source-map",
    entry:"./src/server",
    target:"node",
    watch:true,
    output:{
        filename:"server.js"
    },
    resolve:{
        alias:{
            "@":path.resolve(__dirname,"src")
        },
        extensions:[".js",".jsx",".css"]
    },
    externals:[nodeExternals()],
    module:{
       rules:[
               {test:/\.jsx?/,
                exclude:/node_modules/,
                use:[{
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-react"]
                }
           }]}
       ] 
    }
}