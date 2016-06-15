var gulp = require('gulp');

var autoprefixer = require('autoprefixer');                     // 自动补hack

var cssnano = require('cssnano');                               // css 压缩

var postcss = require('gulp-postcss');                          // postcss

var sass = require('gulp-sass');                                // scss 编译

var sourcemaps = require('gulp-sourcemaps');                    // 生成 source map

var handlebars = require('gulp-handlebars');                    // 模板
var requirejsOptimize = require('gulp-requirejs-optimize');     // 打包


gulp.task('default',function(){
    console.log('gulp');
});

/**
 * 编译sass
 */
gulp.task('sass',function(){
    //定义调用两个插件的数组(只有部分插件适用)
    var processors = [
        autoprefixer({
            browsers: ['last 2 versions', 'Android >= 4.0']
        }),
        cssnano()
    ];

    return gulp.src('src/scss/*.scss')
        //初始化soucemaps
        .pipe(sourcemaps.init())
        //调用sass插件
        .pipe(sass().on('error', sass.logError))
        //调用postcss[自动补全/压缩]
        .pipe(postcss(processors))
        //输出soucemaps
        .pipe(sourcemaps.write('.'))
        //输出css
        .pipe(gulp.dest('./dist/css'));
});

/**
 * hbs 模板
 */
gulp.task('hbs', function () {

    return gulp.src('src/js/templates/*.hbs')
        //调用handlebar方法
        .pipe(handlebars())
        //输出模板
        .pipe(gulp.dest('./dist/js/templates'));
});


/**
 * 编译js
 */
gulp.task('js', function () {
    return gulp.src('js/*.js')
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(requirejsOptimize({
            keepBuildDir: true,
            useStrict: true,
            //optimize: 'uglify' 压缩
            optimize: 'none'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'));
});

