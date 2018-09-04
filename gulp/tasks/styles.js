var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postVarSimp = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssimport = require('postcss-import'),
    mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

    
    
gulp.task('styles', function(){
    return gulp.src('./app/assets/css/style.css')
    .pipe(postcss([cssimport,mixins,postVarSimp,nested,hexrgba,autoprefixer]))
    .on('error', function(errInfo){
        console.log(errInfo.toString());
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});