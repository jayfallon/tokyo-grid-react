var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var lost         = require('lost');
var nesting      = require('postcss-nesting');
var partial      = require('postcss-import');
var cssnano      = require('gulp-cssnano');

// default gulp task
gulp.task('default', ['watch']);

// watch task
gulp.task('watch', function() {
    gulp.watch('src/postcss/**/*.css', ['build:css']);
});

// build:css task
gulp.task('build:css', function() {
    return gulp.src('./src/postcss/index.css')
        .pipe(
            postcss([
				partial(),
                autoprefixer(),
				lost(),
				nesting()
            ]),
			cssnano()
        )
		.pipe(gulp.dest('./src/'));
});
