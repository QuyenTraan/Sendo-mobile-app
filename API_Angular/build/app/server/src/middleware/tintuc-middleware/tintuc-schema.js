"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../util");
var TinTucSchema = /** @class */ (function () {
    function TinTucSchema() {
        this._schema = {
            'noi_dung_id': {
                optional: true,
                isInt: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_INT
                }
            },
            'tieu_de': {
                optional: true,
                isString: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_STRING
                }
            },
            'value_int': {
                optional: true,
                isInt: {
                    options: { min: 1 },
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_INT + ' và >= 1'
                }
            },
            'value_decimal': {
                optional: true,
                isFloat: {
                    options: { min: 1 },
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_FLOAT + ' và >= 1'
                }
            },
            'value_boolean': {
                optional: true,
                isBoolean: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_BOOLEAN
                }
            },
            'value_time': {
                optional: true,
                isDate: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_DATE
                }
            },
            'tag_text': {
                optional: true,
                isArray: {
                    options: { isString: true },
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_ARRAY + ' chứa chuỗi'
                }
            },
            'tag_int': {
                optional: true,
                isArray: {
                    options: { isInt: true },
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_ARRAY + ' chứa số'
                }
            },
            'per_page': {
                optional: true,
                isInt: {
                    options: { min: 1 },
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_INT + ' và >= 0'
                }
            },
            'standard': {
                optional: true,
                isInStandardFormat: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_IN_STANDARD_FORMAT
                }
            },
            'page': {
                optional: true,
                isInt: {
                    options: { min: 1 },
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_INT + ' và >= 0'
                }
            },
            // 'current_status': {
            //     optional: true,
            //     isInRangeOfValue: {
            //         options: { range: NoiDungCurrentStatusEnum.values },
            //         errorMessage: `${VARIABLES.ValidatorMessage.IS_IN_RANGE_OF_VALUE} ${NoiDungCurrentStatusEnum.values}`
            //     }
            // },
            'user_create': {
                optional: true,
                isString: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_STRING
                }
            },
            'user_update': {
                optional: true,
                isString: {
                    errorMessage: util_1.VARIABLES.ValidatorMessage.IS_STRING
                }
            }
        };
    }
    Object.defineProperty(TinTucSchema.prototype, "schema", {
        get: function () {
            return this._schema;
        },
        enumerable: true,
        configurable: true
    });
    return TinTucSchema;
}());
exports.TinTucSchema = TinTucSchema;
//# sourceMappingURL=tintuc-schema.js.map