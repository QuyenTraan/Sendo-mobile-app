"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("../../controllers");
var router = express.Router();
var MonAnRouter = /** @class */ (function () {
    function MonAnRouter() {
        this._monanCtr = new controllers_1.MonAnController();
    }
    Object.defineProperty(MonAnRouter.prototype, "routes", {
        get: function () {
            router.get("/getone", this._monanCtr.getOne); //get du lieu , truyen vao 1 id
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return MonAnRouter;
}());
exports.default = MonAnRouter;
//# sourceMappingURL=monan-router.js.map