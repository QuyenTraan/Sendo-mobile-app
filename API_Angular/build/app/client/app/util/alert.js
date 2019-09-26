"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sweetalert2_1 = require("sweetalert2");
var Alert = /** @class */ (function () {
    function Alert() {
    }
    Alert.showDeleteAlertWithCancel = function (title, text) {
        return sweetalert2_1.default({
            title: title,
            text: text,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Không'
        });
    };
    return Alert;
}());
exports.Alert = Alert;
//# sourceMappingURL=alert.js.map