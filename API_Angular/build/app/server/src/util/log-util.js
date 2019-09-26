"use strict";
/**
 * created by hong duc 30/12/2016
 */
Object.defineProperty(exports, "__esModule", { value: true });
var winston = require("winston");
var LogUtil = /** @class */ (function () {
    function LogUtil() {
    }
    LogUtil.error = function (message) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        winston.error(message, { error: params });
    };
    LogUtil.logger = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)(),
        ]
    });
    return LogUtil;
}());
exports.LogUtil = LogUtil;
//# sourceMappingURL=log-util.js.map