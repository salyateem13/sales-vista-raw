// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(cb) {
    gulp.src('../sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../css/*.css'));
    cb();
});

gulp.task('default', gulp.series('sass', function(cb) {
    gulp.watch('../sass/base/*.scsçs', gulp.series('sass'));
    gulp.watch('../sass/layout/*.scss', gulp.series('sass'));
    gulp.watch('../sass/module/*.scss', gulp.series('sass'));
    gulp.watch('../sass/nav/*.scss', gulp.series('sass'));
    cb();
}));
