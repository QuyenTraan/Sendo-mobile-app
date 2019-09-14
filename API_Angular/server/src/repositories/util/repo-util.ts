import * as _ from 'lodash';

/**
 * author đức 28/1/2017
 * lớp hỗ trợ cho các lớp repo
 */
export class RepoUtil {


    /**
     * @author đức 28/1/2017
     * 
     * tạo truy vấn Where
     * 
     * @static
     * @param {any} object chứa các cột và giá trị muốn có trong where
     * @returns {{ query: string, params: Array<any> }}
     * @throws {Error} nếu object rỗng
     * 
     * @memberOf RepoUtil
     */
    public static buildWhereQuery(object): { query: string, params: Array<any> } {
        if (_.isEmpty(object)) {
            return { query: '', params: [] };
        }
        let query = 'WHERE ';
        let subQuery = {};
        let params = [];
        for (let prop in object) {
            let template = this.mapTypeToCompareOperator(prop, object[prop]);
            subQuery[prop] = template;
            if (template.indexOf('like') !== -1) {
                params.push('%' + object[prop] + '%');
            } else {
                params.push(object[prop]);
            }

        }

        /**
         * co the overide template mặc định
         * vd: subQuery['tag_int'] = `tag_int in [$$]`;
         */
        if (subQuery['current_status']) {
            subQuery['current_status'] = `current_status = any($$::text[])`;
        }

        query += Object.keys(subQuery).map(key => subQuery[key]).join(' and ');
        query = this.reFormatQuery(query);

        return { query: query, params: params };
    }


    /**
     * @author đức 28/1/2017
     * 
     * tạo truy vấn SET
     * 
     * @static
     * @param {any} object chứa các cột vá giá trị muốn có trong SET
     * @param {Array<string>} excludes chứa tên các cột ko muốn có trong SET
     * @returns {{ query: string, params: Array<any> }}
     * @throws {Error} nếu object rỗng
     * 
     * @memberOf RepoUtil
     */
    public static buildSetQuery(object, excludes: Array<string>): { query: string, params: Array<any> } {
        if (Object.keys(object).length === 0 && object.constructor === Object) {
            throw new Error('object đưa vào không được rỗng ');
        }
        let set = { query: 'SET ', params: [] };
        let temp = [];
        let count = 1;
        for (let prop in object) {
            if (excludes.indexOf(prop) === -1) {
                temp.push(`${prop} = $${count}`);
                set.params.push(object[prop]);
                count++;
            }
        }

        set.query += temp.join(',');
        return set;
    }


    /**
     * @author đức 28/1/2017
     * 
     * tạo câu truy vấn ORDER BY
     * 
     * @static
     * @param {string} standard theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)...]
     * @returns {string}
     * @throws {Error} nếu standard không đúng format
     * 
     * @memberOf RepoUtil
     */
    public static convertQueryForOrderBy(standard: string): string {
        if (standard.length < 0 || !(new RegExp(/^(\w+\+[0||1])(,\w+\+[0||1])*$/g).test(standard))) {
            throw new Error(`standard không đúng format, nhận được: '${standard}', nhưng phải là 'ten_cot+0(hoặc 1)[,ten_cot+1,...]'`);
        }
        let result = standard.split(',')
            .filter(s => s.length > 0)
            .map(s1 => s1.split('+'))
            .map(s2 => s2[0] + ' ' + (s2[1] === '0' ? 'ASC' : 'DESC'))
            .join(',');
        return 'ORDER BY ' + result;
    }


    /**
     * @author đức 28/1/2017
     * 
     * hỗ trợ hàm WHERE
     * 
     * @private
     * @static
     * @param {any} query câu truy vấn
     * @returns {string}
     * 
     * @memberOf RepoUtil
     */
    private static reFormatQuery(query): string {
        let count = 1;
        while (query.indexOf('$$') !== -1) {
            query = query.replace('$$', `$${count}`);
            count++;
        }
        return query;
    }


    /**
     * @author đức 28/1/2017
     * 
     * hỗ trợ hàm WHERE
     * 
     * @private
     * @static
     * @param {any} col_name tên cột
     * @param {any} value giá trị
     * @returns {string} template so sánh
     * 
     * @memberOf RepoUtil
     */
    private static mapTypeToCompareOperator(col_name, value): string {
        let templateOperator = `${col_name} = $$`;
        if (typeof value === 'string') {
            templateOperator = `${col_name}::text ilike $$`;
        }
        if (Array.isArray(value)) {
            templateOperator = `$$ && ${col_name}`;
        }
        return templateOperator;
    }
}