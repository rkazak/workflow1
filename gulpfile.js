var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee')
    ;
var coffeeSources = ['compoonents/coffee/tagline.coffee'];

gulp.task('coffee', function() {
  gulp.src(coffeeSources)
    .pipe(coffee({bare: true})
       .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});

gulp.task('log', function() {
  gutil.log('Workflows are awsome')
});
