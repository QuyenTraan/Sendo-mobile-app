"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var MonAnRepository = /** @class */ (function () {
    function MonAnRepository() {
    }
    // /**
    //  * @author Nhật Anh 17/04/2017
    //  * 
    //  * tìm kiếm noi_dung
    //  * @param {QueryOption} option chứa các cột cần tìm
    //  * @param {string} [orderBy] chuỗi để sắp xếp theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)...]
    //  * @param {number} [limit] lấy bao nhiệu
    //  * @param {number} [offset] lấy từ dòng thứ mấy
    //  * @returns {Promise<NoiDung[]>} danh sách noi_dung
    //  * 
    //  * @memberOf NoiDungRepository
    //  */
    // public search(option: QueryOption, orderBy?: string, limit?: number, offset?: number): Promise<pg.QueryResult> {
    //     let queryText = " SELECT * FROM account WHERE username LIKE '%minhtuan'; $1";
    //     // let whereClause = RepoUtil.buildWhereQuery(option);
    //     // queryText += whereClause.query;
    //     // if (orderBy) {
    //     //     queryText += ' ' + RepoUtil.convertQueryForOrderBy(orderBy);
    //     // }
    //     // if (limit) {
    //     //     queryText += ` limit $${whereClause.params.length + 1}`;
    //     //     whereClause.params.push(limit);
    //     // }
    //     // if (offset) {
    //     //     queryText += ` offset $${whereClause.params.length + 1}`;
    //     //     whereClause.params.push(offset);
    //     // }
    //     return pgConnect.runAQuery(queryText)
    //         .catch(error => {
    //             error['queryText'] = queryText;
    //             return Promise.reject(error);
    //         });
    // }
    // public seek(per_page: number, operator: string, id: number = null): Promise<pg.QueryResult> {
    //     let query = `select * from account where user_id= $1`;
    //     return pgConnect.runAQuery(query, [])
    //         .catch(error => {
    //             error['value'] = TinTuc;
    //             return Promise.reject(error);
    //         });
    // }
    // /**
    //  * @author Nhật Anh 17/04/2017
    //  * 
    //  * lấy noi_dung đứng đầu
    //  * 
    //  * @param {string} standard chuỗi để sắp xếp theo format ten_cot+0(hoặc 1)[,ten_cot+0(hoặc 1)...]
    //  * @param {number} offset lấy từ dòng thứ mấy
    //  * @returns {Promise<NoiDung[]>} danh sách noi_dung
    //  * 
    //  * @memberOf NoiDungRepository
    //  */
    // //api/tin_tuc/gettop?standard=tin_tuc_id%2b1&offset=0
    // public getTop(): Promise<pg.QueryResult> {
    //     let queryText = `select * from account`;
    //     return pgConnect.runAQuery(queryText)
    //         .catch(error => {
    //             error['queryText'] = queryText;
    //             return Promise.reject(error);
    //         });
    // }
    // /**
    //  * @author Nhật Anh 17/04/2017
    //  * 
    //  * lấy một noi_dung theo id
    //  * 
    //  * @param {number} id của noi_dung
    //  * @returns {Promise<TinTuc>} noi_dung
    //  * 
    //  * @memberOf NoiDungRepository
    //  */
    MonAnRepository.prototype.getOne = function (id) {
        var queryText = "select * from mon_an where nguyen_lieu ::json->>'id'='24'";
        return base_1.pgConnect.runAQuery(queryText, [id])
            .catch(function (error) {
            error['queryText'] = queryText;
            return Promise.reject(error);
        });
    };
    return MonAnRepository;
}());
exports.MonAnRepository = MonAnRepository;
//# sourceMappingURL=monan-repository.js.map