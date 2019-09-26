"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");
var path = require("path");
var routes_1 = require("./config/routes/routes");
var util_1 = require("./util");
var controllers_1 = require("./controllers");
var util_2 = require("./util");
var env = process.env.NODE_ENV || 'development';
var config = require(path.join(__dirname, 'config', 'json-config', 'server.config.json'))[env];
var debug = require('debug')('server');
var app = express();
exports.app = app;
// all middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// khai báo express-validator middleware
app.use(expressValidator(util_1.options));
// security middleware
// app.all('/api/*', new ValidateRequest().validate);
//allow CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// middleware for validator
app.set('port', config.port);
// all static resource
app.use('/app', express.static(path.resolve(__dirname, '../client/app')));
app.use('/libs', express.static(path.resolve(__dirname, '../client/libs')));
app.use('/css', express.static(path.resolve(__dirname, '../client/css')));
app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));
app.use('/scripts', express.static(path.resolve(__dirname, '../client/scripts')));
// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static(path.resolve(__dirname, '../../node_modules')));
app.use('/login', new controllers_1.AuthController().login);
app.use('/api', new routes_1.default().routes);
// router để test cái test
app.get('/user', function (req, res) {
    res.status(200).json({ name: 'duc' });
});
app.post('/user', function (req, res) {
    var value = req.body;
    res.status(200).json(value);
});
app.post('/userName', function (req, res) {
    res.status(200).send(req.query.name);
});
//-----end router test------------------------------
var renderIndex = function (req, res) {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
};
app.get('/*', renderIndex);
if (env === 'developement' || env === 'developement') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error("Not Found");
    err['status'] = 404;
    next(err);
});
// production error handler
// no stacktrace leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});
process.on('uncaughtException', function (err) {
    debug('uncaughtException: %s', err);
    util_2.LogUtil.error('uncaughtException', err);
});
process.on('unhandledRejection', function (reason, p) {
    debug('Unhandled Rejection at: Promise %s, reason: %s', p, reason);
    util_2.LogUtil.error('Unhandled Rejection', reason, p);
});
//# sourceMappingURL=server.js.map