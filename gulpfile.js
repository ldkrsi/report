const gulp = require('gulp');
const connect = require('gulp-connect');


gulp.task('connect', function () {
	connect.server({
		host: '0.0.0.0',
		root: 'docs',
		livereload: true
	});
});