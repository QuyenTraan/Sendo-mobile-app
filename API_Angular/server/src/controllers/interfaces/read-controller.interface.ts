/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
export interface IReadController {
    getTop: express.RequestHandler;
    getOne: express.RequestHandler;
    search: express.RequestHandler;
}