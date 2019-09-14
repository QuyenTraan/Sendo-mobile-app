"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var ArrayUtil = /** @class */ (function () {
    function ArrayUtil() {
    }
    ArrayUtil.inArray = function (array, search) {
        return _.some(array, function (value, index, collection) {
            if (value === search) {
                return true;
            }
            return false;
        });
    };
    return ArrayUtil;
}());
exports.ArrayUtil = ArrayUtil;
//# sourceMappingURL=array-util.js.map