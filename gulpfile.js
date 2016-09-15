'use strict';

require("babel-core/register");

var browserify = require('browserify'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    del = require('del'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    watchify = require('watchify'),
    babel = require("gulp-babel"),
    babelify = require("babelify"),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    mocha = require('gulp-mocha');

// Production: clean -> compress -> inject
gulp.task('01_run_default_development', ['clean:js_development',
        'browserify-development', 'inject:js_development']);

// Production: clean -> compress -> inject
gulp.task('02_run_default_production', ['clean:js_production',
        'browserify-production', 'inject:js_production']);

//Clean js dev
gulp.task('clean:js_development', function () {
    del([
        'dev/**/*'
    ]);
});

//Clean js prod
gulp.task('clean:js_production', function () {
    del([
        'dist/**/*'
    ]);
});

/**
 * Browserify Development
 */
gulp.task('browserify-development', ['clean:js_development'], function() {
    return browserify('./js/app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(rename({ extname: ''+new Date().getTime()+'.js' }))
        .pipe(gulp.dest('dev'));
});

/**
 * Browserify Production
 */
gulp.task('browserify-production', ['clean:js_production'], function() {
    return browserify('./js/app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename({ extname: ''+new Date().getTime()+'.min.js' }))
        .pipe(gulp.dest('dist'));
});

//Inject js dev
gulp.task('inject:js_development', ['browserify-development'], function () {
    var target = gulp.src('index.html');
    var sources = gulp.src(['dev/*.js'], {read: false});

    return target.pipe(inject(sources, {
            ignorePath: 'goc-starter',
            addRootSlash: false
        }))
        .pipe(gulp.dest(''));
});

//Inject production dev
gulp.task('inject:js_production', ['browserify-production'], function () {
    var target = gulp.src('index.html');
    var sources = gulp.src(['dist/*.js'], {read: false});

    return target.pipe(inject(sources, {
            ignorePath: 'goc-starter',
            addRootSlash: false
        }))
        .pipe(gulp.dest(''));
});

/**
 * Testing
 */
gulp.task('test', function () {
    return gulp.src('js/dev/**/*.spec.js', { read: false })
        .pipe(mocha({
            compilers: {
                js: babel
            }
        }));
});

/**
 * Watch for changes
 */

gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['01_run_default_development']);
});

/**
 * Watchify
 */
var bundler = watchify(browserify(watchify.args));
// add the file to bundle
bundler.add('./js/app.js');
// add any other browserify options or transforms here
bundler.transform(babelify, {optional: ["es7.decorators"]});

gulp.task('run_watchify_dev', bundle); // so you can run `gulp watchify` to build the file
bundler.on('update', bundle); // on any dep update, runs the bundler
bundler.on('log', gutil.log); // output build logs to terminal

function bundle() {
    return bundler.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        // minify for production
        //.pipe(buffer())
        //.pipe(uglify())
        //.pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('dev'));
}
