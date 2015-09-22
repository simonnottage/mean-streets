/**
 * Module dependencies.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');

/**
 * Configure the gulp tasks.
 */
gulp.task('copy-js', function () {
    return gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js'])
        .pipe(concat('bower-components.js'))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('default', ['copy-js']);