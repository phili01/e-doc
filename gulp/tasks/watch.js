var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/**/*.html', function(){
		browserSync.reload();
	}); 

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject')
	});
    
    watch('./app/assets/styles/**/*.css', function(){
		gulp.start('viewmemoInject')     
	});
    
    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    });

});

gulp.task('cssInject',['styles'],function(){
	return gulp.src("./app/temp/styles/styles.css")
	.pipe(browserSync.stream());
});

gulp.task('viewmemoInject',['viewmemo'],function(){
	return gulp.src("./app/temp/styles/viewmemo.css")
	.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'] ,function(){
	browserSync.reload();
})
