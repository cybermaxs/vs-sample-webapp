// including plugins
var gulp = require('gulp');
var fs = require('fs');
var args = require('yargs');
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate')
var del = require('del');
var karma = require('karma').server;

var bases = {
    app: 'VsSampleWebApp',
    test: 'VsSampleWebApp.Tests',
    dist: 'VsSampleWebApp/app/',
};

var devmode = args.config ? args.config : 'Debug';

var paths = {
    scripts: ['Scripts/**/*.js'],
    deps: ['bower_components/**/*.*'],
    html: ['index.html']
};


gulp.task('test',['scripts'], function (done) {
    karma.start({
        configFile: __dirname + '/' + bases.test + '/test/karma.conf.js',
        singleRun: true
    }, done);
});

gulp.task('watch', ['scripts'],function (done) {
    karma.start({
        configFile: __dirname + '/' + bases.test + '/test/karma.conf.js',
    }, done);
});

// clean the build folder
gulp.task('clean', function (cb) {
    del([bases.dist], cb);
});

// Process scripts and concatenate them into one output file
gulp.task('scripts', ['clean'], function () {
    gulp.src(paths.scripts, { cwd: bases.app })
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(bases.dist));
});

// task
gulp.task('default', ['clean']);

gulp.task('tdd', ['clean', 'scripts', 'watch']);

gulp.task('build', ['clean', 'scripts', 'test']);
