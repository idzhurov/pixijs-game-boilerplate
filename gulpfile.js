var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var webpack = require('webpack-stream');
var OUT_DIR = './dist';

// always copy the html first to dist folder
var srcHTML = './src/templates/index.html';
var srcCSS = './src/templates/style.css';
var srcAssets = './src/assets/textures/*';

gulp.task('copy:html', function() {
	gulp.src(srcHTML).pipe(gulp.dest(OUT_DIR));
});

gulp.task('copy:css', function() {
    gulp.src(srcCSS).pipe(gulp.dest(OUT_DIR));
});

gulp.task('copy:assets', function() {
    gulp.src(srcAssets).pipe(gulp.dest(OUT_DIR + '/assets/'));
});

// compile typescript
gulp.task("ts:build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

// run webpack to compile the script into a bundle - note that it needs the ts to already be compiled
gulp.task('webpack', function() {
	return gulp.src('dist/')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['ts:build'], function() {
  return gulp.src('dist/')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/'));
});

// default includes all
gulp.task('default', ['copy:html', 'copy:css', 'copy:assets', 'build']);