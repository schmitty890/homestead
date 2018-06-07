const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const reload = browserSync.reload;
const clean = require('gulp-clean');
const maps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// when served, watch files. call browser-sync
gulp.task('serve', ['browser-sync'], function() {
  gulp.watch('scss/partials/*.scss', ['sass']);
  gulp.watch('public/assets/js/*.js', ['concatScripts']);
});

// browser-sync call nodemon
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: 'http://localhost:8080',
    // open: 'google-chrome',
    open: false,
    port: 3000
  });
});

// nodemon calls sass and concatScripts
gulp.task('nodemon', ['sass', 'concatScripts'], function(done) {
  let running = false;
  return nodemon({
    script: 'server.js',
    watch: 'public/assets/'
  }).on('start', function() {
    console.log('-----------------start-----------------');
    if (!running) {
      done();
    }
    running = true;
  }).on('restart', function() {
    console.log('-----------------restart-----------------');
    setTimeout(function() {
      reload();
    }, 2000);
  })
});

// take the styles in styles.scss and convert them to .css and push them to the assets/css folder
gulp.task('sass', function() {
  return gulp.src('scss/styles.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
    .pipe(gulp.dest('public/assets/build/css'))
});

// clean the build folder
gulp.task('clean', function() {
  console.log('gulp clean task');
  return gulp.src([ // return acts as sort of a promise, without the return statement, other tasks wont know until the clean task is finished.
    'public/assets/build/'
  ])
    .pipe(clean());
});

// concat, map, and write js to build folder
gulp.task('concatScripts', function() {
  console.log('gulp concatScripts task');
  return gulp.src([
    './public/assets/js/*.js'
  ])
    .pipe(maps.init())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/assets/build/js'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('public/assets/build/js'));
});
