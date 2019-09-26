"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_util_1 = require("./array-util");
var KeyCodeUtil = /** @class */ (function () {
    function KeyCodeUtil() {
    }
    KeyCodeUtil.isSpecialKey = function (event) {
        // Check if: backspace ,delete, tab, escape, enter, . and ,
        if (array_util_1.ArrayUtil.inArray([this.BACKSPACE, this.DELETE, this.TAB, this.ESCAPE, this.ENTER, this.DECIMAL_POINT, this.DOT, this.COMMA], event.keyCode)
            // Check if: Ctrl/cmd+A
            || (event.keyCode === this.A && (event.ctrlKey === true || event.metaKey === true))
            // Check if: Ctrl/cmd+C
            || (event.keyCode === this.C && (event.ctrlKey === true || event.metaKey === true))
            // Check if: Ctrl/cmd+X
            || (event.keyCode === this.X && (event.ctrlKey === true || event.metaKey === true))
            // Check if: home, end, left, right
            || (event.keyCode >= this.BEGIN_HOME_END_LEFT_RIGHT && event.keyCode <= this.END_HOME_END_LEFT_RIGHT)) {
            return true;
        }
        return false;
    };
    KeyCodeUtil.isNumberKey = function (event) {
        // Check if: not a number
        if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105)) {
            return false;
        }
        return true;
    };
    KeyCodeUtil.BACKSPACE = 8;
    KeyCodeUtil.A = 65;
    KeyCodeUtil.C = 67;
    KeyCodeUtil.X = 88;
    // begin keycode home,end,left,right
    KeyCodeUtil.BEGIN_HOME_END_LEFT_RIGHT = 35;
    // end keycode home,end,left,right
    KeyCodeUtil.END_HOME_END_LEFT_RIGHT = 39;
    KeyCodeUtil.DELETE = 46;
    KeyCodeUtil.TAB = 9;
    KeyCodeUtil.ESCAPE = 27;
    KeyCodeUtil.ENTER = 13;
    KeyCodeUtil.DOT = 190;
    KeyCodeUtil.COMMA = 188;
    KeyCodeUtil.DECIMAL_POINT = 110;
    return KeyCodeUtil;
}());
exports.KeyCodeUtil = KeyCodeUtil;
//# sourceMappingURL=keycode-util.js.map