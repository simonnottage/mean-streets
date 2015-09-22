/**
 * Module dependencies.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var app_server = require('./app/app_server.js')
var open = require('open');

/**
 * Configure the gulp tasks.
 */
gulp.task('deploy', function () {
    return gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js'])
        .pipe(concat('bower-components.js'))
        .pipe(gulp.dest('public/dist'));
});

gulp.task('serve', ['deploy'], function () {
    return app_server.start();
});

gulp.task('open', ['serve'], function () {
    open('http://localhost:3000');
});

gulp.task('default', ['deploy', 'serve', 'open']);