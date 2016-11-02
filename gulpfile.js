/**
 * Created by Mtui on 11/2/16.
 */
var gulp = require("gulp");
var concat = require("gulp-concat");

gulp.task("concat-controllers", function() {
    return gulp.src('./app/controllers/*.js')
        .pipe(concat('controllers.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task("watch", ["concat-controllers"], function() {
    gulp.watch('./app/controllers/*.js', ["concat-controllers"]);
})

gulp.task("default", ["concat-controllers", "watch"]);
