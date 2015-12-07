var gulp = require('gulp');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');
var rimraf = require('rimraf');
var static_site = require('gulp-static-site');

/*
 * TOP LEVEL TASKS
 */

var BUILD_SEQUENCE = ['site', 'copy-images', 'css-vendor', 'css', 'fonts', 'js-vendor', 'js']

gulp.task('dev', function(callback) {
	runSequence(
		BUILD_SEQUENCE,
		'server',
		'watch',
		callback
	);
});

gulp.task('build', function(callback) {
	runSequence(
		'clean',
		BUILD_SEQUENCE,
		callback
	);
});

/*
 * LOW LEVEL TASKS
 */

var paths = {
    sources: ['src/contents/**','src/templates/**'],
};

gulp.task('site', function () {
    gulp.src('src/contents/**/*.md')
        .pipe(static_site({
        	baseDir: 'src'
        }))
        .pipe(gulp.dest('build/'))
        .pipe(livereload())
});

// gulp.task('copy-pages', function() {
// 	gulp.src([
// 	  	'src/**.html'
// 	  	])
//   		.pipe(gulp.dest('build'))
//   		.pipe(livereload())
// });

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

gulp.task('clean', function (cb) {
	rimraf('./build/**/*', function() {
		cb()
	});
});

gulp.task('watch', function() {
    livereload.listen()
    gulp.watch('src/js/**/*', ['js'])
    gulp.watch('src/styles/**/*', ['css'])
    gulp.watch(paths.sources, ['site'])
});
