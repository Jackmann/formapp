var gulp = require('gulp'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug');

gulp.task('sass', function(){
	gulp.src('./src/*.sass')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('./dist'))
});
 
gulp.task('views', function buildHTML() {
  return gulp.src('./views/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('./views'))
});

gulp.task('watch', function(){
	gulp.watch(['./src/*.sass', './views/*.pug'], ['sass', 'views'])
});

gulp.task('default', ['sass', 'views', 'watch']);