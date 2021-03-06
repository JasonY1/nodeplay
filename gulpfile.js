// gulp will look for gulpfile.js
// Create instance of gulp

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    gulpMocha = require('gulp-mocha'),
    env = require('gulp-env'),
    supertest = require('supertest');

// nodemon takes JSON object to configure itself
gulp.task('default', function(){
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT:8000
    },
// prevent node_modules from affecting gulp
    ignore: ['./node_modules/**']
  })
  .on('restart', function(){
    console.log('Restartng');
  });
});

// Running tests
gulp.task('test', function(){
  // Set envirnonment
  env({vars: {ENV: 'Test'}});

  gulp.src('Tests/*.js', {read: false})
    .pipe(gulpMocha({reporter: 'nyan'}))
});
