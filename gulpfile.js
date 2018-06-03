const gulp    = require('gulp');
const aglio   = require('gulp-aglio');
const watch   = require('gulp-watch');
const plumber = require('gulp-plumber');

const src  = 'docs/**/'
const dest = 'public'

gulp.task('publish', function () {
    gulp.src(`${src}*.md`)
	.pipe(plumber({
	    errorHandler: function(error) {
		console.error(error.message);
		this.emit('end');
	    }
	}))
        .pipe(aglio({ template: 'default' }))
        .pipe(gulp.dest(dest));
});

gulp.task('watch', function() {
    return watch(src, () => {
	return gulp.start(['publish']);
    });
})

