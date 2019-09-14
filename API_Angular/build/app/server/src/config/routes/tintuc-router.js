"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("../../controllers");
var middleware_1 = require("../../middleware");
var bodyParser = require("body-parser");
var router = express.Router();
var TinTucRouter = /** @class */ (function () {
    function TinTucRouter() {
        this._tintucCtr = new controllers_1.TinTucController();
    }
    Object.defineProperty(TinTucRouter.prototype, "routes", {
        get: function () {
            router.use(new middleware_1.TinTucValidator().validate);
            router.get("/getone", this._tintucCtr.getOne); //get du lieu , truyen vao 1 id
            router.get("/gettop", this._tintucCtr.getTop); // get top những dữ liệu đầu tiên
            router.post("/search", this._tintucCtr.search); // Tìm kiếm dữ liệu
            router.post("/deletedelete", this._tintucCtr.delete); //xoa du lieu, truyen id vao ( truyen 1 hay theo nhieu id)
            router.post("/save", this._tintucCtr.save); //ko co thi tao du lieu, co roi thi luu lai du lieu moi
            router.post("/update", this._tintucCtr.update); //ko co thi tao du lieu, co roi thi luu lai du lieu moi
            router.get('/seek', this._tintucCtr.seek); // phân trang theo kiểu seek method
            var urlencodedParser = bodyParser.urlencoded({ extended: false });
            router.post('/getone', urlencodedParser, function (req, res) {
                res.send('id la  ' + req.body.tin_tuc_id);
            });
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return TinTucRouter;
}());
exports.default = TinTucRouter;
Object.seal(TinTucRouter);
//# sourceMappingURL=tintuc-router.js.map