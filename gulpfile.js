var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', gulp.series(function () {
    return gulp.src(['assets/sass/*.scss'])
        .pipe(sass()) // converter o Sass em CSS
        .pipe(gulp.dest('assets/css'));
}));

gulp.task('watch', gulp.series(function () {
    gulp.watch(['assets/sass/*.scss'], gulp.parallel(['sass']));
}));

gulp.task('default', gulp.series(['sass', 'watch']));