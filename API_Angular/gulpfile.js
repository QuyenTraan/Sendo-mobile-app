/**
 * Created by Moiz.Kachwala on 08-06-2016.
 */


"use strict";

const gulp = require("gulp"),
    del = require("del"),
    tsc = require("gulp-typescript"),
    sourcemaps = require('gulp-sourcemaps'),
    tsProject = tsc.createProject("tsconfig.json"),
    tslint = require('gulp-tslint'),
    concat = require('gulp-concat'),
    runSequence = require('run-sequence'),
    nodemon = require('gulp-nodemon'),
    gulpTypings = require("gulp-typings");

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["dist"], cb);
});

/**
 * Build Express server
 */
gulp.task('build:server', ['tslint:server', 'move-json-file'], function () {
    var tsProject = tsc.createProject('server/tsconfig.json');
    var tsResult = gulp.src('server/src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/server'));
});

/**
 * Build Angular 2 client
 */
gulp.task('build:client', ['tslint:client'], function () {
    var tsProject = tsc.createProject('client/tsconfig.json');
    var tsResult = gulp.src('client/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/client'));
});

/**
 * Build server test
 */
gulp.task('build:serverTest', function () {
    var tsProject = tsc.createProject('server/src/test/tsconfig.json');
    var tsResult = gulp.src('server/src/test/**/*.ts')
        .pipe(tsProject());
    return tsResult.js
        .pipe(gulp.dest('dist/server/test'));
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint:client', () => {
    return gulp.src("client/app/**/*.ts")
        .pipe(tslint({
            formatter: "prose"
        }))
        .pipe(tslint.report());
});

/**
 * Lint all custom server file
 */
gulp.task('tslint:server', () => {
    return gulp.src("server/src/**/*.ts")
        .pipe(tslint({
            formatter: "prose"
        }))
        .pipe(tslint.report());
});

/**
 * Lint all
 */
gulp.task('tslint', (done) => {
    runSequence('tslint:client', 'tslint:server', done);
});



/**
 * Copy all resources that are not TypeScript files into build directory. e.g. index.html, css, images
 */
gulp.task("clientResources", () => {
    return gulp.src(["client/**/*", "!**/*.ts", "!client/typings", "!client/typings/**", "!client/*.json"])
        .pipe(gulp.dest("dist/client"));
});

/**
 * Copy bin directory for www
 */
gulp.task("move-bin-file", () => {
    return gulp.src(["server/src/bin/**"])
        .pipe(gulp.dest("dist/server/bin"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
        'core-js/client/**',
        'zone.js/dist/zone.js',
        'reflect-metadata/Reflect.js',
        'reflect-metadata/Reflect.js.map',
        'systemjs/dist/system.src.js'
    ], {
            cwd: "node_modules/**"
        }) /* Glob required here. */
        .pipe(gulp.dest("dist/client/libs"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("css", () => {
    return gulp.src([
        'bootstrap/dist/css/*.css',
        'select2/dist/css/*.css',
        'bootstrap/dist/css/*.css.map',
        'sweetalert2/dist/sweetalert2.min.css',
        'quill/dist/quill.bubble.css',
        'quill/dist/quill.snow.css'
    ], {
            cwd: "node_modules/**"
        }) /* Glob required here. */
        .pipe(gulp.dest("dist/client/css"));
});


gulp.task("scripts", () => {
    return gulp.src([
        'jquery/dist/*.js',
        'bootstrap/dist/js/*.js',
        'select2/dist/js/*.js'
    ], {
            cwd: 'node_modules/**'
        })
        .pipe(gulp.dest('dist/client/scripts'))
})

/**
 * Copy all template of client into build directory
 */
gulp.task("resource-custom", function () {
    return gulp.src("**", {
        cwd: './client/assets'
    }).pipe(gulp.dest('dist/client/assets'));
});

/**
 * Copy app json file in to build derectory
 */
gulp.task("move-json-file", function () {
    return gulp.src("*.json", {
        cwd: './server/src/config/json-config'
    }).pipe(gulp.dest('dist/server/config/json-config'));
});

/**
 * Build all server dependencies
 */
gulp.task('serverResources', function (done) {
    runSequence('move-json-file', 'move-bin-file', done);
});

/**
 * Start the express server with nodemon
 */
gulp.task('start', function () {
    nodemon({
        script: 'dist/server/bin/www',
        ext: 'html js',
        watch: "dist/server/**/*"
    })
        .on('restart', function () {
            console.log('restarted!');
        });
});

/**
 * Build the project.
 * 1. Clean the build directory
 * 2. Build Express server
 * 3. Build the Angular app
 * 4. Copy the resources
 * 5. Copy the dependencies.
 */

gulp.task("build", function (callback) {
    runSequence('clean', 'build:server', 'build:client', 'clientResources', 'serverResources', 'libs', 'css', 'scripts', 'resource-custom', callback);
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["client/**/*.ts"], ['build:client']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });

    gulp.watch(["client/**/*.html", "client/**/*.css"], ['clientResources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });

    gulp.watch(["server/src/**/*.ts"], ['build:server']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
});


gulp.task('default', ['build'], function () {
    runSequence('watch', 'start');
});
