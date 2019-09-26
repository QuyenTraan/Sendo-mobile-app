import * as _ from 'lodash';

export class ArrayUtil {
    public static inArray(array, search) {
        return _.some(array, (value, index, collection) => {
            if (value === search) {
                return true;
            }
            return false;
        })
    }
}