var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    readme = require('gulp-readme-to-markdown');

var config = {
  jsPath: './src/js',
  jsMinPath: './static/js'
};

gulp.task('jshint', function() {
  gulp.src(config.jsPath + '/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('fail'));
});

gulp.task('js-frontend', ['jshint'], function() {
  var minified = [
    config.jsPath + '/ucf-degree-search.js'
  ];

  gulp.src(minified)
    .pipe(concat('ucf-degree-search.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.jsMinPath));
});

gulp.task('js', ['jshint', 'js-frontend']);

gulp.task('readme', function() {
  gulp.src(['readme.txt'])
    .pipe(readme({
      details: false,
      screenshot_ext: [],
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch(config.jsPath + '/*.js', ['js']);
});

gulp.task('default', ['js', 'readme']);
