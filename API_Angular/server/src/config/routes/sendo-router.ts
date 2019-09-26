import express = require("express");

import { SenDoController } from '../../controllers';

import bodyParser = require("body-parser");

let router = express.Router();
export default class SenDoRouter {
    private _sendoCtr: SenDoController;

    constructor() {
        this._sendoCtr = new SenDoController();
    }


    get routes() {
        router.get("/getone", this._sendoCtr.getOne);
    

        return router;
    }
}
