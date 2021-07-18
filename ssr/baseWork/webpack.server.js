
// const nodeExternals = require("webpack-node-externals")
const merge = require('webpack-merge')
const baseConfig = require("./webpack.base")
const ServeConfig = {
    // devtool:"none",
    entry:"./src/server",
    output:{
        filename:"server.js",
        publicPath:"/"
    },
    target:'node',
    // externals:[nodeExternals()],
    module:{
        rules:[  {
          test: /\.css$/,
          use: ["isomorphic-style-loader", "css-loader?modules"]
        },
        {test:/\.(png)|(jpg)|(gif)$/,use:[{
            loader:"file-loader",
            options:{
                name:"img/[name].[hash:5].[ext]",
                emitFile:false
            }
        }]}
    ]
    }
}
module.exports = merge(baseConfig,ServeConfig)