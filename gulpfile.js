const gulp = require("gulp");
//测试
gulp.task("test",function(){
    console.log("项目测试成功");
});

//将index.html文件复制到dist根目录下
gulp.task("copy",function(){
    return gulp.src("index.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
});
//将除index.html文件复制到dist/html目录下
gulp.task("copy-html",function(){
    return gulp.src(["*.html","html/*.html","!index.html"])
    .pipe(gulp.dest("dist/html"))
    .pipe(connect.reload());
});
//将除img下图片复制到dist/images目录下
gulp.task("images",function(){
    return gulp.src(["*.{png,jpg}","img/*.{jpg,png}"])
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
//将js文件复制到dist/js目录下
gulp.task("scripts",function(){
    return gulp.src(["*.js","js/*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
});
//将json文件复制到dist/data目录下
gulp.task("data",function(){
    return gulp.src(["*.json","data/*.{json,html}","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
});
gulp.task("iconfont",function(){
    return gulp.src("iconfont/**/*")
    .pipe(gulp.dest("dist/iconfont"))
    .pipe(connect.reload());
});
const sass = require("gulp-sass");
const minifyCss = require("gulp-minify-css");
const rename = require("gulp-rename");
//将stylesheet下的index.scss文件及其压缩文件重命名复制到dist/css目录下
gulp.task("sass",function(){
    return gulp.src("./stylesheet/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});

gulp.task("scss",function(){
    return gulp.src("stylesheet/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});
//将所有的任务一起启动
gulp.task("bulid",["copy","copy-html","iconfont", "scripts", "images", "data", "sass","scss"],function(){
    console.log("项目建立成功");
});


//对以上的任务进行监听
gulp.task("watch",function(){
    gulp.watch("index.html",["copy"]);
    gulp.watch(["*.html","html/*.html","!index.html"],["copy-html"]);
    gulp.watch(["*.{png,jpg}","img/*.{jpg,png}"],["images"]);
    gulp.watch(["*.js","js/*.js","!gulpfile.js"],["scripts"]);
    gulp.watch(["*.json","data/*.{json,html}","!package.json"],["data"]);
    gulp.watch("./stylesheet/index.scss",["sass"]);
    gulp.watch("stylesheet/*.scss",["scss"]);
    gulp.watch("./iconfont/**/*",["iconfont"]);
});
//在dist目录下开启一个服务器，并且开启实习更新页面
const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:686,
        livereload:true

    })
});

//对监听和服务设立单独任务 defalut
gulp.task("default",["watch","server"]);