const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

// webpack配置文件
module.exports = {
    //入口路径
    entry: path.join(__dirname, './src/main.js'),  //打包哪个文件
    output: {
        path: path.join(__dirname, './dist'),  //输出目录
        filename: 'bundle.js'
    },
    plugins: [ //配置插件的节点
        new htmlWebpackPlugin({   //创建一个在内存中生成HTML页面的插件
            template: path.join(__dirname, './src/index.html'), //指定模板页面
            filename: 'index.html'
        })
    ],
    module: {  //用于配置所有第三方模块加载器
        rules: [
            { test: /\.css$/, use:['style-loader', 'css-loader'] }  //匹配.css结尾的文件,使用这两个插件处理
        ]
    }
}