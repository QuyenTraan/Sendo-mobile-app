import express = require('express');
import bodyParser = require("body-parser");
import expressValidator = require('express-validator');
import path = require('path');

import BaseRoutes from './config/routes/routes';
import { options } from './util';
import { AuthValidator } from './middleware';
import { AuthController } from './controllers';
import { LogUtil } from './util';

var env: string = process.env.NODE_ENV || 'development';
let config = require(path.join(__dirname, 'config', 'json-config', 'server.config.json'))[env];
let debug = require('debug')('server');



var app = express();

// all middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// khai báo express-validator middleware
app.use(expressValidator(options));
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

app.use('/login', new AuthController().login);
app.use('/api', new BaseRoutes().routes);



// router để test cái test
app.get('/user', (req, res) => {
    res.status(200).json({ name: 'duc' });
});

app.post('/user', (req, res) => {
    let value = req.body;
    res.status(200).json(value);
});

app.post('/userName', (req, res) => {
    res.status(200).send(req.query.name);
});
//-----end router test------------------------------

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
};

app.get('/*', renderIndex);

if (env === 'developement' || env === 'developement') {
    app.use(function (err, req: express.Request, res: express.Response, next: express.NextFunction) {
        res.status(err.status || 500);
        res.json({
            error: err,
            message: err.message
        });
    });
}


// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next) {
    let err = new Error("Not Found");
    err['status'] = 404;
    next(err);
});

// production error handler
// no stacktrace leaked to user
app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(err.status || 500);
    res.json({
        error: {},
        message: err.message
    });
});

process.on('uncaughtException', function (err) {
    debug('uncaughtException: %s', err);
    LogUtil.error('uncaughtException', err);
})

process.on('unhandledRejection', (reason, p) => {
    debug('Unhandled Rejection at: Promise %s, reason: %s', p, reason);
    LogUtil.error('Unhandled Rejection', reason, p);
});


export { app }
