var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    formidable = require('express-formidable'),

    routes = require('./routes/index'),
    ads = require('./routes/advert'),

    app = express(),

    util = require("./local_modules/utils");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(formidable.parse());
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/advert', ads);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        renderErr(res, {message: err.message, status: err.status, error: err});
    });
}
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    renderErr(res, {message: err.message, error: {}});
});

function renderErr(res, opts) {
    var s = opts.status;
    opts = util.merge(opts, util.sources);
    opts.title = s;
    if(util.errMap.hasOwnProperty(s)) {
        res.render(util.errMap[s], opts);
    } else {
        res.render("err/error", opts);
    }
}


module.exports = app;
