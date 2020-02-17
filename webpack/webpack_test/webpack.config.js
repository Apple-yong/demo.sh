const path = require('path')

// webpack配置文件
module.exports = {
    //入口路径
    entry: path.join(__dirname, './src/main.js'),  //打包哪个文件
    output: {
        path: path.join(__dirname, './dist'),  //输出目录
        filename: 'bundle.js'
    }
}