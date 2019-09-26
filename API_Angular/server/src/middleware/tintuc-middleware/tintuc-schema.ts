import { VARIABLES } from '../../util';

import { TinTucCurrentStatusEnum } from '../../models';

export class TinTucSchema {
    private _schema;

    constructor() {
        this._schema = {
            'noi_dung_id': {
                optional: true,
                isInt: {
                    errorMessage: VARIABLES.ValidatorMessage.IS_INT
                }
            },
            'tieu_de': {
                optional: true,
                isString: {
                    errorMessage: VARIABLES.ValidatorMessage.IS_STRING
                }
            },
            'value_int': {
                optional: true,
                isInt: {
                    options: { min: 1 },
                    errorMessage: VARIABLES.ValidatorMessage.IS_INT + ' và >= 1'
                }
            },
            'value_decimal': {
                optional: true,
                isFloat: {
                    options: { min: 1 },
                    errorMessage: VARIABLES.ValidatorMessage.IS_FLOAT + ' và >= 1'
                }
            },
            'value_boolean': {
                optional: true,
                isBoolean: {
                    errorMessage: VARIABLES.ValidatorMessage.IS_BOOLEAN
                }
            },
            'value_time': {
                optional: true,
                isDate: {
                    errorMessage: VARIABLES.ValidatorMessage.IS_DATE
                }
            },
            'tag_text': {
                optional: true,
                isArray: {
                    options: { isString: true },
                    errorMessage: VARIABLES.ValidatorMessage.IS_ARRAY + ' chứa chuỗi'
                }
            },
            'tag_int': {
                optional: true,
                isArray: {
                    options: { isInt: true },
                    errorMessage: VARIABLES.ValidatorMessage.IS_ARRAY + ' chứa số'
                }
            },
            'per_page': {
                optional: true,
                isInt: {
                    options: { min: 1 },
                    errorMessage: VARIABLES.ValidatorMessage.IS_INT + ' và >= 0'
                }
            },
            'standard': {
                optional: true,
                isInStandardFormat: {
                    errorMessage: VARIABLES.ValidatorMessage.IS_IN_STANDARD_FORMAT
                }
            },
            'page': {
                optional: true,
                isInt: {
                    options: { min: 1 },
                    errorMessage: VARIABLES.ValidatorMessage.IS_INT + ' và >= 0'
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
                    errorMessage: VARIABLES.ValidatorMessage.IS_STRING
                }
            },
            'user_update': {
                optional: true,
                isString: {
                    errorMessage: VARIABLES.ValidatorMessage.IS_STRING
                }
            }
        };
    }

    get schema() {
        return this._schema;
    }
}