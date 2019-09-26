"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var util_1 = require("./util");
var base_1 = require("./base");
var _ = require("lodash");
var TinTucRepository = /** @class */ (function () {
    function TinTucRepository() {
    }
    /**
     * @author Nhật Anh 17/04/2017
     *
     * tìm kiếm noi_dung
     * @param {QueryOption} option chứa các cột cần tìm
     * @param {string} [orderBy] chuỗi để sắp xếp theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)...]
     * @param {number} [limit] lấy bao nhiệu
     * @param {number} [offset] lấy từ dòng thứ mấy
     * @returns {Promise<NoiDung[]>} danh sách noi_dung
     *
     * @memberOf NoiDungRepository
     */
    TinTucRepository.prototype.search = function (option, orderBy, limit, offset) {
        var queryText = " SELECT * FROM account WHERE username LIKE '%minhtuan'; $1";
        // let whereClause = RepoUtil.buildWhereQuery(option);
        // queryText += whereClause.query;
        // if (orderBy) {
        //     queryText += ' ' + RepoUtil.convertQueryForOrderBy(orderBy);
        // }
        // if (limit) {
        //     queryText += ` limit $${whereClause.params.length + 1}`;
        //     whereClause.params.push(limit);
        // }
        // if (offset) {
        //     queryText += ` offset $${whereClause.params.length + 1}`;
        //     whereClause.params.push(offset);
        // }
        return base_1.pgConnect.runAQuery(queryText)
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    TinTucRepository.prototype.seek = function (per_page, operator, id) {
        if (id === void 0) { id = null; }
        var query = "select * from account where user_id= $1";
        return base_1.pgConnect.runAQuery(query, [])
            .catch(function (error) {
            error['value'] = models_1.TinTuc;
            return Promise.reject(error);
        });
    };
    /**
     * @author Nhật Anh 17/04/2017
     *
     * lấy noi_dung đứng đầu
     *
     * @param {string} standard chuỗi để sắp xếp theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)...]
     * @param {number} offset lấy từ dòng thứ mấy
     * @returns {Promise<NoiDung[]>} danh sách noi_dung
     *
     * @memberOf NoiDungRepository
     */
    //api/tin_tuc/gettop?standard=tin_tuc_id%2b1&offset=0
    TinTucRepository.prototype.getTop = function () {
        var queryText = "select * from account";
        return base_1.pgConnect.runAQuery(queryText)
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    /**
     * @author Nhật Anh 17/04/2017
     *
     * lấy một noi_dung theo id
     *
     * @param {number} id của noi_dung
     * @returns {Promise<TinTuc>} noi_dung
     *
     * @memberOf NoiDungRepository
     */
    TinTucRepository.prototype.getOne = function (id) {
        var queryText = "select * from account where user_id =$1";
        console.log('j');
        return base_1.pgConnect.runAQuery(queryText, [id])
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    /**
     * @author Nhật Anh 17/04/2017
     *
     * dùng để xóa noi_dung theo id
     *
     * @param {number[]} ids các id để xóa
     * @returns {Promise<number>} số dòng đã xóa
     *
     * @memberOf NoiDungRepository
     */
    TinTucRepository.prototype.delete = function (ids) {
        var queryText;
        queryText = "DELETE  FROM account WHERE user_id = $1";
        return base_1.pgConnect.runAQuery(queryText, [ids])
            .catch(function (error) {
            error['queryText'] = queryText;
            // console.log(queryText)
            return Promise.reject(error);
        });
    };
    /**
     * @author Nhật Anh 17/04/2017
     *
     * thêm 1 noi_dung
     *
     * @param {NoiDung} noidung cần thêm
     * @returns {Promise<number>} số dòng đã thêm
     *
     * @memberOf NoiDungRepository
     */
    TinTucRepository.prototype.insert = function (tintuc) {
        var queryText;
        queryText = "\n            INSERT INTO account (\n                user_id, username, password, email, created_on, last_login)\n             VALUES (\n                    $1,\n                    $2,\n                    $3,\n                    $4,\n                    $5\n                    $6\n                    );\n                    ";
        return base_1.pgConnect.runAQuery(queryText, [
            tintuc.user_id,
            tintuc.username,
            tintuc.password,
            tintuc.email,
        ])
            .catch(function (error) {
            error['queryText'] = queryText;
            error['value'] = tintuc;
            return Promise.reject(error);
        });
    };
    /**
     * @author Nhật Anh 17/04/2017
     *
     * update noi_dung
     *
     * @param {QueryOption} option các cột cần update
     * @returns {Promise<number>} số dòng đã update
     *
     * @memberOf NoiDungRepository
     */
    TinTucRepository.prototype.update = function (tintuc) {
        // let setQuery = RepoUtil.buildSetQuery(option, ['username', 'user_id']);
        // setQuery.params.push(option.user_id);
        // setQuery.params.push(option.user_id);
        // let queryText = `UPDATE "account"
        //     ${setQuery.query}, username = $${setQuery.params.length}
        // 	WHERE "user_id" = $${setQuery.params.length - 1};`;
        var queryText;
        queryText = 'UPDATE account SET username =$2 where user_id=$1';
        console.log(tintuc.user_id);
        console.log(tintuc.username);
        return base_1.pgConnect.runAQuery(queryText, [
            tintuc.user_id,
            tintuc.username
        ]) //cho do vi tri nen doi dolla 
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    TinTucRepository.prototype.count = function (object) {
        if (object === void 0) { object = {}; }
        if (_.isEmpty(object)) {
            return base_1.pgConnect.runAQuery('select count(tin_tuc_id) from tin_tuc');
        }
        var query = 'select count(user_id) from tin_tuc';
        var where = util_1.RepoUtil.buildWhereQuery(object);
        return base_1.pgConnect.runAQuery(query + (" " + where.query), where.params);
    };
    return TinTucRepository;
}());
exports.TinTucRepository = TinTucRepository;
//# sourceMappingURL=tintuc-repository.js.map