"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var log_util_1 = require("../util/log-util");
var ControllerUtil = /** @class */ (function () {
    function ControllerUtil() {
    }
    /**
     * @author đức 26/1/2017
     *
     * hàm gộp tất cả những hành giống nhau lại
     */
    ControllerUtil.resovleResponse = function (res, promise) {
        promise
            .then(function (result) {
            var status = result.status;
            delete result.status;
            if (status && status >= 400) {
                res.status(status).json(result);
                return;
            }
            res.status(status || 200).json(result);
        })
            .catch(function (error) {
            log_util_1.LogUtil.error('error khi request:', error);
            res.status(500).json(error);
        });
    };
    return ControllerUtil;
}());
exports.default = ControllerUtil;
//# sourceMappingURL=controller-util.js.map