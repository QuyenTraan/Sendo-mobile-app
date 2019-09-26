"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../util");
var repositories_1 = require("../repositories");
var MonAnController = /** @class */ (function () {
    function MonAnController() {
        var _this = this;
        this.getOne = function (req, res) {
            var id = req.query.user_id;
            console.log(id);
            if (!id) {
                res.status(400).json({
                    error: 'bị lỗi'
                });
                return;
            }
            var promiseResult = _this._monanRepo.getOne(id)
                .then(function (result) {
                if (result.rowCount > 0) {
                    var noidung = result.rows;
                    return { result: noidung };
                }
                else {
                    return {
                        status: 400,
                        error: {
                            error_type: util_1.VARIABLES.ErrorMessage.NO_DATA,
                            message: util_1.VARIABLES.ErrorMessage.NO_DATA_WITH_ID(id)
                        }
                    };
                }
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        this._monanRepo = new repositories_1.MonAnRepository();
    }
    return MonAnController;
}());
exports.default = MonAnController;
//# sourceMappingURL=monan-controler.js.map