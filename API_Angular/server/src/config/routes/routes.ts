import express = require('express');
import path = require('path');

import TinTucRouter from './tintuc-router';
import MonAnRouter from './monan-router';

var app = express();
export default class Routes {
        get routes() {
                app.use('/tin-tuc', new TinTucRouter().routes);
                app.use('/mon-an', new MonAnRouter().routes);
                return app;
        }
}

