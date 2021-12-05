// Quinta-feira 02/12/2021 as 22:12:00 h +|-
const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function  servidor(cb) {
      return gulp.src('build')
      .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
      }))
}
 function  monitorarArquivos(){
       watch('src/**/*.html', () => gulp.series('appHTMl')() )
       watch('src/**/*.scss', () => gulp.series('appCSS')() )
       watch('src/**/*.js', () => gulp.series('appJS')() )
       watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')() )


      
  return cb()
 }
 
 module.exports = {
    monitorarArquivos,
    servidor
  }