var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var paths = {
    sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function (done) {
    gulp.src('./scss/*.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./web/css/'))
        .pipe(minifyCss({keepSpecialComments: 0 }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./web/css/'))
        .on('end', done);
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.sass, ['sass-admin']);
});