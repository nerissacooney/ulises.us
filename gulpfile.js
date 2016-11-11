var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    cp = require('child_process').exec,
    uglify = require('gulp-uglify'),
    bs = require('browser-sync').create();

var src = './assets',
    dest = './_site/assets';

// Task for building blog when something changed:
gulp.task('jekyll', function(){
    cp('exec jekyll build --incremental --watch',
        function(err,stdout,stderr){
            console.log(err);
            console.log(stdout);
            console.log(stderr);
        });
});

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    bs.init({server: {baseDir: '_site/'}, port: 4000});
    // Reloads page when some of the already built files changed:
    // gulp.watch('_site/**/*.*').on('change', bs.reload);
});

gulp.task('js', function(){

    browserify({
        entries: src + '/js/main.js',
        debug: true
    })
        .bundle()
        .pipe(source('main.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(dest + '/js'));
});

gulp.task('watch',function(){
    gulp.watch(src + '/js/*.js', ['js']);
});

gulp.task('default', [ 'js','watch','jekyll', 'serve']);
