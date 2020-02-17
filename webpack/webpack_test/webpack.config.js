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
    plugins: [
        new htmlWebpackPlugin({   //创建一个在内存中生成HTML页面的插件
            template: path.join(__dirname, './src/index.html'), //指定模板页面
            filename: 'index.html'
        })
    ]
}