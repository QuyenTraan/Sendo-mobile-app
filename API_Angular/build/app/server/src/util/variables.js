"use strict";
/**
 * ĐÂY LÀ NHỮNG GIÁ TRỊ MẶC ĐỊNH DÙNG CHUNG TRONG CẢ HỆ THỐNG
 * KHÔNG ĐƯỢC THAY ĐỔI NẾU KHÔNG ĐƯỢC PHÉP
 */
Object.defineProperty(exports, "__esModule", { value: true });
var VARIABLES;
(function (VARIABLES) {
    var ErrorMessage = /** @class */ (function () {
        function ErrorMessage() {
        }
        ErrorMessage.MISSING_PARAM = 'thiếu tham số';
        ErrorMessage.NO_DATA = 'không tồn tại dữ liệu';
        ErrorMessage.NEED_COLUMN_IN = function (col_name, type, in_where) {
            var messages = [];
            for (var i = 0; i < col_name.length; i++) {
                messages.push("c\u1EA7n " + col_name[i] + " ki\u1EC3u " + type[i]);
            }
            var message = messages.join(',');
            return message + " trong " + in_where;
        };
        ErrorMessage.NO_DATA_WITH_ID = function (id) {
            return "kh\u00F4ng c\u00F3 d\u1EEF li\u1EC7u t\u1ED3n t\u1EA1i v\u1EDBi id " + id;
        };
        return ErrorMessage;
    }());
    VARIABLES.ErrorMessage = ErrorMessage;
    var ValidatorMessage = /** @class */ (function () {
        function ValidatorMessage() {
        }
        ValidatorMessage.IS_INT = 'phải là kiểu int';
        ValidatorMessage.IS_STRING = 'phải là kiểu string';
        ValidatorMessage.IS_FLOAT = 'phải là số thập phân';
        ValidatorMessage.IS_BOOLEAN = 'phải là kiểu boolean';
        ValidatorMessage.IS_DATE = 'giá trị phải thể hiện đúng giá trị thời gian';
        ValidatorMessage.IS_ARRAY = 'giá trị phải là mảng';
        ValidatorMessage.IS_IN_STANDARD_FORMAT = 'giá trị phải đúng theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)]';
        ValidatorMessage.IS_IN_RANGE_OF_VALUE = 'phải là 1 trong các giá trị';
        return ValidatorMessage;
    }());
    VARIABLES.ValidatorMessage = ValidatorMessage;
})(VARIABLES = exports.VARIABLES || (exports.VARIABLES = {}));
//# sourceMappingURL=variables.js.map