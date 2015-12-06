var gulp = require('gulp');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');
var del = require('del');

/*
 * TOP LEVEL TASKS
 */
gulp.task('dev', function(callback) {
	runSequence(
		'build',
		'server',
		'watch',
		callback
	);
});

gulp.task('build', function(callback) {
	runSequence(
		'clean',
		['copy-pages', 'copy-images', 'css-vendor', 'css', 'fonts', 'js-vendor', 'js'],
		callback
	);
});

gulp.task('deploy', function(callback) {
	runSequence(
		'build',
		'gh-pages',
		callback
	);
});

/*
 * LOW LEVEL TASKS
 */

gulp.task('copy-pages', function() {
	gulp.src([
	  	'src/**.html'
	  	])
  		.pipe(gulp.dest('build'))
  		.pipe(livereload())
});

gulp.task('copy-images', function() {
	gulp.src([
	  	'src/img/**/*'
	  	])
  		.pipe(gulp.dest('build/img'))
  		.pipe(livereload())
});

gulp.task('css-vendor', function() {
  	gulp.src([
	  	'node_modules/materialize-css/dist/css/materialize.css',
	  	])
	  	.pipe(gulp.dest('build/css'))
});
gulp.task('css', function() {
  	gulp.src([
	  	'src/styles/styles.css'
	  	])
	  	.pipe(gulp.dest('build/css'))
	  	.pipe(livereload())
});

gulp.task('fonts', function() {
	gulp.src([
	  	'node_modules/materialize-css/dist/font/**/*',
	  	])
	  	.pipe(gulp.dest('build/font'))
	  	.pipe(livereload())
});

gulp.task('js-vendor', function() {
	gulp.src([
		'modernizr.js',
	  	'node_modules/jquery/dist/jquery.js',
	  	'node_modules/materialize-css/dist/js/materialize.js'
	  	])
		.pipe(concat('vendor.js'))
	  	.pipe(gulp.dest('build/js'))
});

gulp.task('js', function() {
	gulp.src([
		'src/js/init.js',
	  	])
	  	.pipe(gulp.dest('build/js'))
	  	.pipe(livereload())
});

gulp.task('clean', function () {
	return del(['./build/**/*']);
});

gulp.task('watch', function() {
    livereload.listen()
    gulp.watch('./src/js/**/*', ['js'])
    gulp.watch('./src/styles/**/*', ['css'])
    gulp.watch('./src/index.html', ['copy-pages'])
});
