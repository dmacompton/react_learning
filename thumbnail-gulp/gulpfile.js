var gulp = require('gulp');
var gutil = require('gulp-util');   //вывод инфы во время билда
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('default', function () {
    var bundler = watchify(browserify({
        entries: ['./src/app.jsx'], // в каком порядке все файлы должны подключаться
        transform: [reactify],  // что требуется конвертировать с jsx в js и чем?
        extensions: ['.jsx'],   // расширения файлов
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function build(file) {
        if (file) gutil.log('Recompile ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('main.js'))
            .pipe(gulp.dest('./'));
    }

    build();
    bundler.on('update', build);
});
