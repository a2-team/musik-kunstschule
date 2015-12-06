var gulp = require('gulp');

var startExpress = function(cb) {
    var express = require('express')
    var app = express();
    app.use('/', express.static('build'));
    var port = 3002
    app.listen(port, function() {
        console.log("Development server running on http://127.0.0.1:"+port);
        cb();
    });
};

gulp.task('server', function(cb) {
    startExpress(cb);
});
