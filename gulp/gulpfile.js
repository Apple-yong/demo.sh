const plugins = require('gulp-load-plugins')()
const gulp = require('gulp');
// const args = require('yargs').argv; //用于获取启动参数，针对不同参数，切换任务执行过程时需要
const uglify = require('gulp-uglify') //js压缩
const sass = require('gulp-sass'); //将sass预处理为css
const cssMinify = require("gulp-minify-css"); //压缩css
const autoprefixer = require('gulp-autoprefixer'); //解决内核前缀
const imagemin = require('gulp-imagemin'); //压缩图片
const pngquant = require('imagemin-pngquant'); //深度压缩
const cache = require('gulp-cache'); //只压缩没压缩过的,压缩过的从缓存中获取
// const rename = require('gulp-rename'); //重命名
const browserSync = require('browser-sync'); //监听文件的更改并且自动刷新页面
// const reload = browserSync.reload; //静态文件服务器，同时也支持浏览器自动刷新
// const ngConstant = require('gulp-ng-constant');
// const del = require('del'); //删除build文件(当css，img，js出现删除操作的时候，虽然watch会监听，但是并不会删除相应文件。)



const paths = {
    appDir: "./app/",
    outputDir: "./dist/",
    sassSrc: {
        input: './app/css/*.scss',
        output: './dist/css/',
    },
    imgSrc: {
        input: ['./app/img/*.png', './app/img/*.jpg'],
        output: './dist/img/'
    },
    jsSrc: {
        input: ['./app/js/*.js'],
        output: './dist/js/'
    },
    watch: {
        sass: ['./app/**/*.scss'],
        css: ['./app/app.css'],
        html: ['app/**/*.html', '!app/lib/**/*.js'],
        js: ['app/**/*.js', '!app/**/*.js']
    }
};


//转换成css,加css前缀,压缩
gulp.task('sass', function() {
    return gulp.src(paths.sassSrc.input)
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: false, //是否美化属性值(对齐) 默认：true
        }))
        .pipe(cssMinify()) //gulp-minify-css压缩比gulp-sass自带压缩效率好
        .pipe(gulp.dest(paths.sassSrc.output))
});


// 压缩图片
gulp.task('images', function() {
    return gulp.src(paths.imgSrc.input)
        .pipe(cache(imagemin({
            progressive: true,
            use: [pngquant()]
        })))
        .pipe(gulp.dest(paths.imgSrc.output))
});


//js压缩
gulp.task('script', function() {
    return gulp.src(paths.jsSrc.input)
        // 2\. 压缩文件
        .pipe(uglify())
        .pipe(gulp.dest(paths.jsSrc.output))
});



//浏览器同步
// gulp.task('browser-sync', function() { //默认地址localhost:3000，默认打开
//     browserSync({
//         server: {
//             baseDir: [paths.appDir, paths.publishDir] // 设置服务器的根目录
//         }
//     });
// });


gulp.task('default', ['sass', 'images', 'script']);
gulp.task('build', ['sass', 'images', 'script']);