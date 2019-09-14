"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
/**
 * author đức 28/1/2017
 * lớp hỗ trợ cho các lớp repo
 */
var RepoUtil = /** @class */ (function () {
    function RepoUtil() {
    }
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
    RepoUtil.buildWhereQuery = function (object) {
        if (_.isEmpty(object)) {
            return { query: '', params: [] };
        }
        var query = 'WHERE ';
        var subQuery = {};
        var params = [];
        for (var prop in object) {
            var template = this.mapTypeToCompareOperator(prop, object[prop]);
            subQuery[prop] = template;
            if (template.indexOf('like') !== -1) {
                params.push('%' + object[prop] + '%');
            }
            else {
                params.push(object[prop]);
            }
        }
        /**
         * co the overide template mặc định
         * vd: subQuery['tag_int'] = `tag_int in [$$]`;
         */
        if (subQuery['current_status']) {
            subQuery['current_status'] = "current_status = any($$::text[])";
        }
        query += Object.keys(subQuery).map(function (key) { return subQuery[key]; }).join(' and ');
        query = this.reFormatQuery(query);
        return { query: query, params: params };
    };
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
    RepoUtil.buildSetQuery = function (object, excludes) {
        if (Object.keys(object).length === 0 && object.constructor === Object) {
            throw new Error('object đưa vào không được rỗng ');
        }
        var set = { query: 'SET ', params: [] };
        var temp = [];
        var count = 1;
        for (var prop in object) {
            if (excludes.indexOf(prop) === -1) {
                temp.push(prop + " = $" + count);
                set.params.push(object[prop]);
                count++;
            }
        }
        set.query += temp.join(',');
        return set;
    };
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
    RepoUtil.convertQueryForOrderBy = function (standard) {
        if (standard.length < 0 || !(new RegExp(/^(\w+\+[0||1])(,\w+\+[0||1])*$/g).test(standard))) {
            throw new Error("standard kh\u00F4ng \u0111\u00FAng format, nh\u1EADn \u0111\u01B0\u1EE3c: '" + standard + "', nh\u01B0ng ph\u1EA3i l\u00E0 'ten_cot+0(ho\u1EB7c 1)[,ten_cot+1,...]'");
        }
        var result = standard.split(',')
            .filter(function (s) { return s.length > 0; })
            .map(function (s1) { return s1.split('+'); })
            .map(function (s2) { return s2[0] + ' ' + (s2[1] === '0' ? 'ASC' : 'DESC'); })
            .join(',');
        return 'ORDER BY ' + result;
    };
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
    RepoUtil.reFormatQuery = function (query) {
        var count = 1;
        while (query.indexOf('$$') !== -1) {
            query = query.replace('$$', "$" + count);
            count++;
        }
        return query;
    };
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
    RepoUtil.mapTypeToCompareOperator = function (col_name, value) {
        var templateOperator = col_name + " = $$";
        if (typeof value === 'string') {
            templateOperator = col_name + "::text ilike $$";
        }
        if (Array.isArray(value)) {
            templateOperator = "$$ && " + col_name;
        }
        return templateOperator;
    };
    return RepoUtil;
}());
exports.RepoUtil = RepoUtil;
//# sourceMappingURL=repo-util.js.map