var gulp = require('gulp'),
    imageMin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    nano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync');


gulp.task('previewdocs',function(){
    browserSync.init({
        notify:false,
        server:{
            baseDir: "docs"
        }
    });
});
gulp.task('deletedocsFolder',['icons'],function(){
    return del('./docs');
});

gulp.task('copyGeneral',['deletedocsFolder'],function(){
    var paths = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ];
    return gulp.src(paths)
    .pipe(gulp.dest('./docs'));
});
//task non partirà prima di cancellare docs preesistente e rebuild srite icons
gulp.task('optimizeImages',['deletedocsFolder'],function(){
    //con ! escludiamo alcuni file
    return gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons','!./app/assets/images/icons/**/*'])
        .pipe(imageMin({
            progressive:true,//jpg
            interlaced: true,//gif
            multipass:true//svg
        }))
        .pipe(gulp.dest('./docs/assets/images'));
});
gulp.task('useminTrigger',['deletedocsFolder'],function(){
    return gulp.start('usemin');
});

//task non parte prima di cancellare docs preesistente e non prima di fare rebuild di css e js
gulp.task('usemin',['styles','scripts'],function(){
    return gulp.src('./app/index.html')
    .pipe(usemin({ //prima funzione per revision e seconda per compressione
        css: [function(){return rev();},function(){return nano();}],
        js: [function(){return rev();},function(){return uglify();}]
    }))
        .pipe(gulp.dest('./docs'));
});





gulp.task('build',['deletedocsFolder','copyGeneral','optimizeImages','useminTrigger']);