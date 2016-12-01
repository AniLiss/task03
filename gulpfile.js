var gulp = require('gulp');
var sass = require('gulp-sass');
// var livereload = require('gulp-livereload');


//
// gulp.task('sass-compile', function() {
// 	gulp.src('app.scss')
// 	.pipe(sass({includePaths: ['base',
// 								'layouts',
// 								'modules',
// 								'plugins',
// 								'../../bower_components/lumx/dist/scss',
// 								'../../bower_components/bourbon/app/assets/stylesheets',
// 								'../../bower_components/mdi/scss']}).on('error', sass.logError))
// 	.pipe(gulp.dest('../css/'))
//     .pipe(livereload());
// });
// //Watch task
// gulp.task('default',function() {
// 	livereload.listen();
// 	gulp.run('sass-compile');
// 	gulp.watch('**/*.scss',['sass-compile']);
// 	gulp.watch(['../*.html']).on('change', livereload.changed);
// 	gulp.watch(['../css/*.css']).on('change', livereload.changed);
// });

gulp.task('sass', function(){
    gulp.src('app/scss/**/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/css'))
});

// gulp.task('sass', function () {
//     return gulp.src('./sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css'));
// });

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});