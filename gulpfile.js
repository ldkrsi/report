'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('sass', () => {
	return gulp.src('./sass/main.sass')
		.pipe(sass())
		.pipe(postcss([
			autoprefixer(),
			cssnano()
		]))
		.pipe(gulp.dest('./docs/static/css'));
});

gulp.task('watch', gulp.series('sass', () => {
	gulp.watch('./sass/**/*.sass', gulp.series('sass'));
}));

gulp.task('dev', gulp.parallel('watch', () => {
	connect.server({
		host: '0.0.0.0',
		root: 'docs'
	});
}));