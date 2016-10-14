var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();

// Take the name of the plugin without the gulp dash in front of it 
var $ = require('gulp-load-plugins')({lazy: true});

// var jshint = require('gulp-jshint');
// var jscs = require('gulp-jscs');
// var util = require('gulp-util');
// var gulpPrint = require('gulp-print');
// var gulpIf = require('gulp-if');

gulp.task('vet', function(){

    log('Hello this is log util of gulp');

	return gulp
	.src(config.alljs)
	.pipe($.if(args.verbose, $.print()))
	.pipe($.jscs())
	.pipe($.jshint())
	.pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
	.pipe($.jshint.reporter('fail'));
});

gulp.task('styles', function(){
	log('Compiling Less --> CSS');

	return gulp
	.src(config.less)
	.pipe($.less())
	.pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
	.pipe(gulp.dest(config.temp));
});

gulp.task('stylesSASS', function(){
	log('Compiling SASS --> CSS');

	return gulp
	.src(config.sass)
	.pipe($.sass())
	.pipe($.autoprefixer({browsers: ['last 2 version', '> 5%']}))
	.pipe(gulp.dest(config.temp));
});

// Functions

function log(msg){
	if(typeof(msg) === 'object'){
		for(var item in msg) {
			if(msg.hasOwnProperty(item)){
				$.util.log($.util.colors.blue(msg[item]));
			}
		}
	} else{
		$.util.log($.util.colors.blue(msg));
	}
}