"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tintuc_schema_1 = require("./tintuc-schema");
/**
 * Middleware dùng cho validate toàn bộ TinTuc api
 */
var TinTucValidator = /** @class */ (function () {
    function TinTucValidator() {
        var _this = this;
        this._schema = new tintuc_schema_1.TinTucSchema();
        this.validate = function (req, res, next) {
            req.check(_this._schema.schema);
            req.getValidationResult().then(function (result) {
                if (result.isEmpty()) {
                    next();
                }
                else {
                    res.status(400).json(result.array());
                }
            });
        };
    }
    return TinTucValidator;
}());
exports.default = TinTucValidator;
//# sourceMappingURL=tintuc-validator.js.map