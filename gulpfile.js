const fs = require('fs');
const gulp = require('gulp');
const tsc = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const path = require('path');

const sourceDirs = ['./__e2e_tests__/**/*.ts', './__e2e_tests__/**/*.tsx'];
const copySourceDirs = ['./__e2e_tests__/**/*.js'];
const destDir = path.resolve('testBuild');

const tscOptions = getTscOptions(JSON.parse(fs.readFileSync('./tsconfig.json', 'utf-8')));

function getTscOptions(tscOptionsRaw) {
    let options = tscOptionsRaw.compilerOptions;

    options.outDir = destDir;

    return options;
}


gulp.task('tsc', () =>
    gulp
        .src(sourceDirs)
        .pipe(sourcemaps.init())
        .pipe(tsc(tscOptions))
        .js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destDir))
);

gulp.task('jscopy', () =>
    gulp
        .src(copySourceDirs)
        .pipe(gulp.dest(destDir))
);

gulp.task('clean', cb => del(destDir + '*', cb));

gulp.task('nightwatch', cb => {
    require('nightwatch/bin/runner.js');
});

gulp.task('watch', ['e2e'], () => {
    gulp.watch([sourceDirs], ['tsc']);
});

gulp.task('e2e', ['clean', 'jscopy', 'tsc', 'nightwatch'], () => {
});
