var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function () {
    gulp.src('assets/sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));

    gulp.src('assets/sass/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('assets/css/min'));

});