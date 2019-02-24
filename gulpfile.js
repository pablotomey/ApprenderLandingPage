/*
------- DEPENDENCIAS
*/
var gulp = require('gulp'),
    sass = require('gulp-sass');
    plumber = require('gulp-plumber');
    rename = require('gulp-rename');
    minify = require('gulp-minify-css');
    img = require('gulp-imagemin');
    uglify = require('gulp-uglify');
    concat = require('gulp-concat');
    browserSync = require('browser-sync').create();

// Sincronizacion entre la carpeta principal de compilación y el navegador
function browser_sync(){
    browserSync.init({

        browser: 'firefox',

        server: {
            baseDir: 'build/'
        }
    });
}

// Auto recarga del navegador
function reload(cb){
    browserSync.reload();
    cb();
}

// Sass to Css
function style(cb){
        gulp.src('source/sass/**/*.sass')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/css/'))
        .pipe(browserSync.stream());
    cb();
};

// Minificar archivos JS
function scripts(cb){
    gulp.src('source/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
    cb();
}

// Concatenar archivos o librerias JS
function vendors(cb){
    gulp.src('source/js/vendors/*.js')   
    .pipe(concat('vendors.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/vendors/'));
    cb();
}

// Compresor de imagenes
function images(cb){
    gulp.src('source/img/*')
    .pipe(img())
    .pipe(gulp.dest('build/img/'));
    cb();
}

function watch(){
    gulp.watch('source/sass/**/*.sass', gulp.series(style, reload))
    gulp.watch('source/js/*.js', gulp.series(scripts, reload))
    gulp.watch('source/js/vendors/*.js', gulp.series(vendors, reload))
    gulp.watch('build/*.html', reload);
};

gulp.task('style', style);
gulp.task('images', images);
gulp.task('scripts', scripts);
gulp.task('vendors', vendors);
gulp.task('watch', gulp.parallel(browser_sync, watch));


