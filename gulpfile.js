// gulp will look for gulpfile.js
// Create instance of gulp

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

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