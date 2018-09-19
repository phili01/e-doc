var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');


gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport,mixins,cssvars,nested, hexrgba,autoprefixer]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles'));
});


gulp.task('viewmemo', function(){
	return gulp.src('./app/assets/styles/viewmemo.css')
	.pipe(postcss([cssImport,mixins,cssvars,nested, hexrgba,autoprefixer]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles/view')); 
});

gulp.task('memodash', function(){
	return gulp.src('./app/assets/styles/dash.css')
	.pipe(postcss([cssImport,mixins,cssvars,nested, hexrgba,autoprefixer]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles/view')); 
});

gulp.task('memosign', function(){
	return gulp.src('./app/assets/styles/sign.css')
	.pipe(postcss([cssImport,mixins,cssvars,nested, hexrgba,autoprefixer]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/temp/styles/view')); 
});