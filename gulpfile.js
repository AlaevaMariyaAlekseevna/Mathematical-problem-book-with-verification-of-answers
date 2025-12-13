const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

function compileSCSS() {
    return gulp.src('scss/main.scss')  // Вход: main.scss
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('css'));  // Выход: css/main.css (но мы переименуем ниже)
}

// Задача для build (минификация для продакшена)
function buildCSS() {
    return gulp.src('scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'));
}

// Watch для разработки
function watchFiles() {
    gulp.watch('scss/**/*.scss', compileSCSS);
}

// Экспорты задач
exports.default = gulp.series(compileSCSS, watchFiles);  // npm run start или gulp
exports.build = buildCSS;  // Для продакшена: gulp build