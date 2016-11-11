var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    cp = require('child_process').exec,
    bs = require('browser-sync').create();

var src = 'assets',
    dest = '_site/assets';

// Task for building blog when something changed:
gulp.task('jekyll', function(){
    cp('bundle exec jekyll build --watch',
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
    gulp.watch('_site/**/*.*').on('change', bs.reload);
});

// gulp.task('js', function(){
//     return gulp.src( src + '/js/app.js' )
//         .pipe(browserify({
//             transform: 'reactify',
//             debug: 'true'
//         }))
//         .on('error', function(err) {
//             console.error('NOPE! ', err.message);
//         })
//         .pipe(gulp.dest( dest + '/js' ))
// });

gulp.task('default', ['jekyll', 'serve']);
