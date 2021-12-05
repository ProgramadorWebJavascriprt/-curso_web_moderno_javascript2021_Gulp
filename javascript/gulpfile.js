/*Segunda-feira 29/11/2021 das 21:56:00 as 22:30:00  h+|- */ 
const {series} =  require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transfomacaoJS(cd) {
    return gulp.src('src/**/*.js') 
    .pipe(babel({
          comments:false,
          presets:["env"],

    })) 
     .pipe(uglify())
     .on('error', err = console.log(err))
     .pipe(concat('codigo.min.js'))
     .pipe(gulp.dest('build'))
   
}
 function fim(cb)  {
     console.log('fim!!!!!')
     return cb()
    }
 exports.default = series(transfomacaoJS, fim)
 /*
  JS é linguagem complicada...

 */