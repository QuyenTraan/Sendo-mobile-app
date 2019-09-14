import express = require("express");

import { MonAnController } from '../../controllers';

import bodyParser = require("body-parser");

let router = express.Router();
export default class MonAnRouter {
    private _monanCtr: MonAnController;

    constructor() {
        this._monanCtr = new MonAnController();
    }


    get routes() {
        router.get("/getone", this._monanCtr.getOne);
        router.get("/gettop", this._monanCtr.getTop); // get top những dữ liệu đầu tiên
         //get du lieu , truyen vao 1 id
         router.post("/search", this._monanCtr.search); // Tìm kiếm dữ liệu
         router.post("/save", this._monanCtr.save);

        return router;
    }
}
