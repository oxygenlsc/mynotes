exports.keys = "duyi.come"

exports.view = {//该配置会被 egg-view 读取
    // root: "模板所在的根目录",// 告诉egg-view到哪里去寻找模板，多个绝对路径使用逗号分隔，默认 /app/view
    cache: true,// 是否在启动时缓存模板路径，以提高效率，默认开启
    mapping: {// 映射配置，将不同的模板后缀映射到对应的模板引擎处理
        ".ejs": "ejs",
        ".html": "ejs"
    },
    defaultViewEngine: "ejs",//如果映射找不到对应的模板引擎，将使用该值作为默认使用的模板引擎
    defaultExtension:".ejs",//后续在controller中渲染模板时，默认渲染的模板后缀名
}

exports.$apiBase = 'lscxc'

// 全局中间件

exports.middleware = ["mymid"];
exports.mymid = {
    a:1,b:2
}