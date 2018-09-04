var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync')
    ;


gulp.task('watch', function(){
    browserSync.init({
        notify:false,
        server:{
            baseDir: "app"
        }
    });
    
    watch('./app/index.html', function(){
        browserSync.reload();
    });
    //./ così torniamo alla root
    //** future cartelle
    //* futuri file
    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    });
    
    
    watch('./app/assets/scripts/**/*.js', function(){
        gulp.start('scriptRefresh');//task scripts
    });
});

//metodo stream di browser-sync butta tutto quello che viene inserito nel pipe direttamente nel browser
//nel metodo task possiamo inserire un parametro, subito dopo il nome, che è un array dentro il quale dobbiamo specificare le dependencies task!!
gulp.task('cssInject',['styles'], function(){
    return gulp.src('./app/temp/styles/style.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptRefresh',['scripts'],function(){
    browserSync.reload();
    
});