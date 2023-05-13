const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const sourcemaps = require("gulp-sourcemaps")
const uglify = require("gulp-uglify")
const obfuscate = require("gulp-obfuscate")
const imagemin = require("gulp-imagemin")

function compilaSass() {
    return gulp.src("./source/styles/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./build/styles"))
}

function comprimeJavascript() {
    return gulp.src("./source/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./build/scripts"))
}

function comprimeJavascript(){
	return gulp.src("./source/scripts/*.js")
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest("./build/scripts"))
}

function comprimeImagens() {
    return gulp.src("./source/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./build/images"))
}

exports.default = function(){
    gulp.watch("./source/styles/*.scss", { ignoreInitial: false }, 
    gulp.series(compilaSass, comprimeJavascript, comprimeImagens))
}

exports.imagens = comprimeImagens