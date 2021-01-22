const fs           = require('fs');
const browserSync  = require('browser-sync').create();
const gulp         = require('gulp');
const include      = require('gulp-include');
const eslint       = require('gulp-eslint');
const isFixed      = require('gulp-eslint-if-fixed');
const tslint       = require('gulp-tslint');
const ts           = require('typescript');
const tsc          = require('gulp-typescript');
const babel        = require('gulp-babel');
const rename       = require('gulp-rename');
const uglify       = require('gulp-uglify');
const concat       = require('gulp-concat');
const gap          = require('gulp-append-prepend');
const sourcemap    = require('gulp-sourcemaps');
const readme       = require('gulp-readme-to-markdown');
const merge        = require('merge');


let config = {
  src: {
    jsPath: './src/js',
    tsPath: './src/ts'
  },
  dist: {
    jsPath: './static/js'
  },
  packagesPath: './node_modules',
  sync: false,
  syncTarget: 'http://localhost/wordpress/'
};

/* eslint-disable no-sync */
if (fs.existsSync('./gulp-config.json')) {
  const overrides = JSON.parse(fs.readFileSync('./gulp-config.json'));
  config = merge(config, overrides);
}
/* eslint-enable no-sync */


//
// Helper functions
//

// Base JS linting function (with eslint). Fixes problems in-place.
function lintJS(src, dest) {
  dest = dest || config.src.jsPath;

  return gulp.src(src)
    .pipe(eslint({
      fix: true
    }))
    .pipe(eslint.format())
    .pipe(isFixed(dest));
}

// Base TS linting function (with tslint).
function lintTS(src) {
  return gulp.src(src)
    .pipe(tslint({
      formatter: 'verbose'
    }))
    .pipe(tslint.report());
}

// Base JS compile function
function buildJS(src, dest) {
  dest = dest || config.dist.jsPath;

  return gulp.src(src)
    .pipe(include({
      includePaths: [config.packagesPath, config.src.jsPath]
    }))
    .on('error', console.log) // eslint-disable-line no-console
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(dest));
}

// BrowserSync reload function
function serverReload(done) {
  if (config.sync) {
    browserSync.reload();
  }
  done();
}

// BrowserSync serve function
function serverServe(done) {
  if (config.sync) {
    browserSync.init({
      proxy: {
        target: config.syncTarget
      }
    });
  }
  done();
}


//
// JavaScript
//

// Run eslint on js files in src.jsPath
gulp.task('es-lint-plugin', () => {
  return lintJS([`${config.src.jsPath}/*.js`], config.src.jsPath);
});

// Concat and uglify degree search typeahead js through babel
gulp.task('js-build-search', () => {
  return buildJS(`${config.src.jsPath}/ucf-degree-search.js`, config.dist.jsPath);
});

// Concat and uglify degree picker js through babel
gulp.task('js-build-picker', () => {
  return buildJS(`${config.src.jsPath}/ucf-degree-picker.js`, config.dist.jsPath);
});

// All js-related tasks
gulp.task('js', gulp.series('es-lint-plugin', 'js-build-search', 'js-build-picker'));


//
// TypeScript
//

// Run tslint on ts files in src.tsPath
gulp.task('ts-lint-plugin', () => {
  return lintTS([`${config.src.tsPath}/*.ts`]);
});

// Concat and uglify ts files for the Angular degree search
gulp.task('ts-build-search-angular', () => {
  const files = [
    `${config.src.tsPath}/handlebar-helpers.ts`,
    `${config.src.tsPath}/services/degreeservice.ts`,
    `${config.src.tsPath}/controllers/maincontroller.ts`,
    `${config.src.tsPath}/controllers/programcontroller.ts`,
    `${config.src.tsPath}/controllers/collegecontroller.ts`,
    `${config.src.tsPath}/directives/degreedirectives.ts`,
    `${config.src.tsPath}/filters/encodingfilter.ts`,
    `${config.src.tsPath}/app.ts`
  ];
  const tsProject = tsc.createProject('tsconfig.json', {
    module: 'commonjs',
    target: 'ES5',
    sortOutput: true,
    typescript: ts
  });

  return gulp.src(files)
    .pipe(sourcemap.init())
    .pipe(tsc(tsProject))
    .pipe(concat('ucf-degree-search-angular.min.js'))
    .pipe(gap.prependFile(`${config.packagesPath}/url-search-params-polyfill/index.js`))
    .pipe(uglify())
    .pipe(sourcemap.write('/'))
    .pipe(gulp.dest(config.dist.jsPath));
});

// All ts-related tasks
gulp.task('ts', gulp.series('ts-lint-plugin', 'ts-build-search-angular'));


//
// Documentation
//

// Generates a README.md from README.txt
gulp.task('readme', () => {
  return gulp.src('readme.txt')
    .pipe(readme({
      details: false,
      screenshot_ext: [] // eslint-disable-line camelcase
    }))
    .pipe(gulp.dest('.'));
});


//
// Rerun tasks when files change
//
gulp.task('watch', (done) => {
  serverServe(done);

  gulp.watch(`${config.src.jsPath}/**/*.js`, gulp.series('js', serverReload));
  gulp.watch('./**/*.php', gulp.series(serverReload));
});


//
// Default task
//
gulp.task('default', gulp.series('ts', 'js', 'readme'));
