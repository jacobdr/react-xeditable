var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('buildDev', function () {
  browserify({
    entries: 'index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('index.js'))
  .pipe(gulp.dest('dist'));
});

gulp.task('build', function () {
  browserify({
    entries: 'index.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform("babelify", {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('index.js'))
  .pipe(gulp.dest('.'));
});


gulp.task('default', ['buildDev']);
