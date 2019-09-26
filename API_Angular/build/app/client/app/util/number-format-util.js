"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberFormatUtil = /** @class */ (function () {
    function NumberFormatUtil() {
    }
    // format a number to decimal
    NumberFormatUtil.intFormat = function (n) {
        var regex = /(\d)((\d{3}\.?)+)$/;
        n = n.split('.').join('');
        while (regex.test(n)) {
            n = n.replace(regex, '$1.$2');
        }
        return n;
    };
    // cut the real number and decimal point, and format the real number
    NumberFormatUtil.numFormat = function (n) {
        var pointReg = /([\d\.,]*)\,(\d*)$/, f;
        if (pointReg.test(n)) {
            f = RegExp.$2;
            return this.intFormat(RegExp.$1) + ',' + f;
        }
        return this.intFormat(n);
    };
    return NumberFormatUtil;
}());
exports.NumberFormatUtil = NumberFormatUtil;
//# sourceMappingURL=number-format-util.js.map