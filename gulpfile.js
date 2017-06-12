var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    tslint = require('gulp-tslint'),
    tsc    = require('gulp-typescript-compiler'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemap = require('gulp-sourcemaps'),
    readme = require('gulp-readme-to-markdown');

var config = {
  src: {
    js: './src/js',
    ts: './src/ts'
  },
  dist: {
    js: './static/js'
  }
};

gulp.task('jshint', function() {
  gulp.src(config.src.js + '/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('fail'));
});

gulp.task('js-frontend', ['jshint'], function() {
  var minified = [
    config.src.js + '/ucf-degree-search.js'
  ];

  gulp.src(minified)
    .pipe(concat('ucf-degree-search.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dist.js));
});

gulp.task('tslint', function() {
  gulp.src(config.src.ts + '/**/*.ts')
    .pipe(tslint())
    .pipe(tslint.report('verbose'));
});

gulp.task('ts-frontend', ['tslint'], function() {
  var files = [
    config.src.ts + '/services/degreeservice.ts',
    config.src.ts + '/controllers/maincontroller.ts',
    config.src.ts + '/controllers/programcontroller.ts',
    config.src.ts + '/controllers/collegecontroller.ts',
    config.src.ts + '/directives/degreedirectives.ts',
    config.src.ts + '/app.ts'
  ];

  return gulp.src(files, {read: false})
    .pipe(tsc({
      module: 'commonjs',
      target: 'ES5',
      sourcemap: false,
      logErrors: true,
      resolve: true
    }))
    .pipe(sourcemap.init())
    .pipe(concat('ucf-degree-search-angular.min.js'))
    .pipe(uglify())
    .pipe(sourcemap.write('/'))
    .pipe(gulp.dest(config.dist.js));
});

gulp.task('ts', ['tslint', 'ts-frontend']);

gulp.task('js', ['jshint', 'js-frontend']);

gulp.task('scripts', ['ts', 'js']);

gulp.task('readme', function() {
  gulp.src(['readme.txt'])
    .pipe(readme({
      details: false,
      screenshot_ext: [],
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch(config.src.js + '/*.js', ['js']);
  gulp.watch(config.src.ts + '/**/*.ts', ['ts']);
});

gulp.task('default', ['scripts', 'readme']);
