// 导入模块
let gulp = require('gulp');
let babel = require('gulp-babel');
let cssnano = require('gulp-cssnano');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass');

// 发布任务
// function test() {
//     console.log('test');
// }

function fnJS() {
    return gulp.src('./src/js/*.js')
        .pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js'));
}

function fnSass() {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        // .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
}

function fnImg() {
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}
//复制index.html
function fnCopyIndex() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'));
}

//监听任务
function fnWatch() {
    gulp.watch('./src/js/*.js', fnJS);
    gulp.watch('./src/sass/*.scss', fnSass);
    gulp.watch('./src/*.html', fnCopyIndex);
}

// 导出任务
// exports.test = test;
exports.js = fnJS;
exports.sass = fnSass;
exports.img = fnImg;
exports.copyIndex = fnCopyIndex;
exports.default = fnWatch;