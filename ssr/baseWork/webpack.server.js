
// const nodeExternals = require("webpack-node-externals")
const merge = require('webpack-merge')
const baseConfig = require("./webpack.base")
const ServeConfig = {
    // devtool:"none",
    entry:"./src/server",
    output:{
        filename:"server.js"
    },
    target:'node',
    // externals:[nodeExternals()],
    module:{
        rules:[  {
          test: /\.css$/,
          use: ["isomorphic-style-loader", "css-loader?modules"]
        },]
    }
}
module.exports = merge(baseConfig,ServeConfig)