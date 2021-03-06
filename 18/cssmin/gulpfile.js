var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');

gulp.task('default', function(done){
    gulp.src('src/**/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
    done();
});

gulp.task('jshint', function(done){
    gulp.src('src/main.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
    done();
})

gulp.task('web', function(done){
    return gulp
        .src('src/main.js')
        .pipe(jshint())
        .pipe(
            jshint.reporter('gulp-jshint-html-reporter', {
                filename: __dirname+ "/jshint-output.html",
                createMissingFolders: false
            })
        );
});