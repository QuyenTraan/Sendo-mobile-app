import validator = require('validator');
/**
 * đây là nơi khai báo chung của cái module express-validator
 * errorFormatter  và customValidators là dùng chung cho tất cả
 */
export const options = {
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.')
            , root = namespace.shift()
            , formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    },
    customValidators: {
        /**
         * @author Hồng đức 17/1/2017
         * dùng để kiểm {value} có phải là mảng không
         * {options} có {isInt} khi đặt true thì sẽ kiểm tra mọi phần tử trong mảng có phải kiểu int không
         * {isString} khi đặt true sẽ kiểm tra mọi phần tử trong mảng có phải kiểu string không
         */
        isArray: function (value: Array<any>, options?) {
            if (Array.isArray(value)) {
                if (!options) {
                    return true;
                } else {
                    if (options.isInt) {
                        return value.every(elm => {
                            return validator.isInt(elm);
                        });
                    }

                    if (options.isString) {
                        return value.every(elm => {
                            return typeof elm === 'string';
                        });
                    }

                    return true;
                }
            } else {
                return false;
            }

        },
        /**
         * @author Hồng đức 17/1/2017
         * dùng để kiểm tra {value} có phải là kiểu string không
         */
        isString: function (value) {
            return typeof value === 'string';
        },
        /**
         * @author hồng đức 17/1/2017
         * dùng để kiểm tra value có format đúng theo standard ko
         */
        isInStandardFormat: function (value: string) {
            if (value.length < 0 || !(new RegExp(/^(\w+\+[0||1])(,\w+\+[0||1])*$/g).test(value))) {
                return false;
            } else {
                return true;
            }
        },
        /**
         * @author hồng đức 06/2/2017
         * dùng kiểm tra nó có thuộc giá trị trong khoảng nào ko
         * 
         * @param {any} option có range là mảng chứa khoảng giá trị
         * @param {any} value là giá trị để xét
         */
        isInRangeOfValue: function (value, options) {
            return options.range.indexOf(value) !== -1;
        }
    }
};