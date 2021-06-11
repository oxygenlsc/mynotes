const path = require("path");
const merge = require('webpack-merge')
const baseConfig = require("./webpack.base")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin= require('mini-css-extract-plugin')
const clientConfig = {
    devtool:"source-map",
    entry:"./src/client",
    output:{
        path:path.resolve(__dirname,"./public"),
        filename:"js/bundle.[hash:5].js",
        publicPath:"/"
    },
    plugins:[
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:['**/*',"123.svg"]
        }),
        new MiniCssExtractPlugin({
            filename:"css/bundle.[hash:5].css"
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:[MiniCssExtractPlugin.loader,"css-loader?modules"]},
            {test:/\.(png)|(jpg)|(gif)$/,use:[{
                loader:"file-loader",
                options:{
                    name:"img/[name].[hash:5].[ext]"
                }
            }]}
        ]
    }
}
module.exports = merge(baseConfig,clientConfig)