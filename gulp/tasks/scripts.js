var gulp = require('gulp');
var webpack = require('webpack');

//assicurarsi prima di tutto che webpack sia installato anche localmente nel progetto e non solo globalmente
gulp.task('scripts',['modernizr'],function(callback){
    webpack(require('../../webpack.config.js'),function(err,stats){
        
        if(err){
           console.log(err.toString());
        }
        
        console.log(stats.toString());
        callback();
        
    });
});