var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var minifyjs = require('gulp-js-minify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sassLint = require('gulp-sass-lint');
var  notify = require('gulp-notify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

// ================================
// Variables
// ================================

var config = {
	aplication: {
		name: 'index',
		port: 3000,
		phpPort: 80,
		localhost: 'localhost'
	},
	scripts: {
		src: 'src/js/*.js',
		dest: 'public/js/',
		watch: 'src/js/*.js',
		min: 'public/js/*.js'
	},
	styles: {
		src: 'src/sass/index.scss',
		dest: 'public/css/',
		watch: 'src/sass/**/*.s+(a|c)ss',
		min: 'public/css/*.css'
	},
	page: 'index.html'
}

// ================================
// task fonts
// ================================

function fonts(done) {
	return gulp.src('./src/fonts/**/*')
		.pipe(gulp.dest('./public/fonts/'))
		.pipe(plumber({
			errorHandler: function(error){
				notify.onError("Error: <%= error.message %>")
			}
	}))
	done();
};

// ================================
// task scripts
// ================================

function scripts() {
	return gulp.src(config.scripts.src)
	.pipe(plumber({
		errorHandler: function(error){
			notify.onError("Error: <%= error.message %>")
		}
	}))
	.pipe(concat('index.js'))
	.pipe(babel())
	.on("error", notify.onError({
		onLast: true,
		title: "TASK: Your js 👎",
		message: "<%= error.message %>"
	}))
	.pipe(gulp.dest(config.scripts.dest))
	.on("error", notify.onError({
		onLast: true,
		title: "TASK: Your js 👎",
		message: "<%= error.message %>"
	}))
}

// ================================
// task styles
// ================================
 function styles(done) {
	return gulp.src(config.styles.src)
		.pipe(plumber({
			errorHandler: function(error){
				console.log(error)
			}
		}))
		//.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		//.pipe(rename({ extname: '.min.css' }))
		// .pipe(sourcemaps.write('/'))
		.pipe(gulp.dest(config.styles.dest))
		done();
}

// ================================
// validate your code sass
// ================================

function sassValidate(){
	return gulp.src(config.styles.watch)
	.pipe(sassLint())
	.pipe(sassLint.format())
	.pipe(sassLint.failOnError())
	.on("error", notify.onError({
		onLast: true,
		title: "TASK: Your css 👎",
		message: "<%= error.message %>"
	}))
}

// ================================
//  task reload
// ================================
function reload(done) {
	browserSync.reload();
	done();
}

// ================================
// task server
// ================================
function serve(done) {
	browserSync.init(
		{
			open: false,
			server: {
				baseDir: "./",
				index: "index.html"
			}
		}
	);
	done();
}

// ================================
// task watch change files
// ================================
function watch(done){
	gulp.watch(config.scripts.watch, gulp.series(scripts, reload));
	gulp.watch(config.styles.watch, gulp.series(sassValidate,styles, reload));
	done();
}

// ================================
// task default
// ================================

gulp.task('default', gulp.series(serve, gulp.parallel(fonts ,styles, scripts, watch)),function(done) {
	done();
});

gulp.task('sassLint', sassValidate, function(done){
	done();
});
gulp.task('scripts', scripts, function(done){
 done();
});
gulp.task('styles', styles, function(done) {
 done();
});
