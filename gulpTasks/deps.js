// Quinta-feira 02/12/2021 as 22:12:00 h +|-

const gulp = require('gulp')
const uglifycss = require('gulp-uglify')
const concat = require('gulp-concat')
const { appHtml, appCSS, appJS, appIMG } = require('./app')


 function depsCSS(){
        return gulp.src('/node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifycss({"uglyComents" : false}))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
 }
 function depsFonts(cb){
  return gulp.src('/node_modules/font-awesome/css/font-awesome/fonts/*.*')
  .pipe(gulp.dest('build/assets/fonts'))

 }
  // Sábado,04/12/2021 as 21:42:00 h +|-
 gulp.task('appHTML', appHtml)
 gulp.task('appCSS',appCSS)
 gulp.task('appJS',appJS)
 gulp.task('appIMG', appIMG)
 module.exports = {
   depsCSS,
   depsFonts
 }
 // Sexta-feira,03/12/2021 22:05:00 h +|-