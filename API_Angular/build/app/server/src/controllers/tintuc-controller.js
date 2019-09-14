"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var repositories_1 = require("../repositories");
var util_1 = require("../util");
var models_1 = require("../models");
var TinTucController = /** @class */ (function () {
    function TinTucController() {
        var _this = this;
        /**
         * @author Nhật Anh 17/04/2017
         *
         * api lấy 1 noi_dung
         *
         * GET api/noi_dung/getone/?noi_dung_id
         */
        this.getOne = function (req, res) {
            var id = req.query.user_id;
            console.log(id);
            if (!id) {
                res.status(400).json({
                    error: 'bị lỗi'
                });
                return;
            }
            var promiseResult = _this._tintucRepo.getOne(id)
                .then(function (result) {
                if (result.rowCount > 0) {
                    var noidung = result.rows.map(function (r) { return _this.rowMapper(r); })[0];
                    return { result: noidung };
                }
                else {
                    return {
                        status: 400,
                        error: {
                            error_type: util_1.VARIABLES.ErrorMessage.NO_DATA,
                            message: util_1.VARIABLES.ErrorMessage.NO_DATA_WITH_ID(id)
                        }
                    };
                }
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        /**
         * @author Nhật Anh 17/04/2017
         *
         * lấy 1 danh sách những phần tử dữ liệu đứng đầu
         *
         * GET api/noi_dung/gettop/top?standard=col_name+0&?offset=0
         * api/tin_tuc/gettop?standard=tin_tuc_id%2b1&offset=0
         */
        this.getTop = function (req, res) {
            var promiseResult = _this._tintucRepo.getTop()
                .then(function (result) {
                console.log(result);
                var noidungs = result.rows;
                // console.log(noidungs);
                return { result: noidungs };
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        this.save = function (req, res) {
            var promiseResult = _this._tintucRepo.insert(req.body)
                .then(function (result) {
                console.log(result);
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        /**
         * @author Nhật Anh 17/04/2017
         *
         * update dữ liệu dựa vào id
         * nhận vào 1 req.body có cấu trúc như entity
         *
         * POST /api/noi_dung/update
         */
        this.update = function (req, res) {
            // let id = req.body.user_id; //lay tu khach hang
            // let username = req.body.username;// lay tu khach hang
            // if (!req.body.tin_tuc_id || !req.body.user_update) {
            //     res.status(400).json({
            //         error: {
            //             error_type: VARIABLES.ErrorMessage.MISSING_PARAM,
            //             message: VARIABLES.ErrorMessage.NEED_COLUMN_IN(['user_id', 'noi_dung'], ['int', 'string'], 'body')
            //         }
            //     });
            //     return;
            // }
            var promiseResult = _this._tintucRepo.update(req.body)
                .then(function (result) {
                if (result.rowCount > 0) {
                    return { result: [], count: result.rowCount };
                }
                else {
                    return {
                        status: 400,
                        error: {
                            error_type: util_1.VARIABLES.ErrorMessage.NO_DATA,
                            message: util_1.VARIABLES.ErrorMessage.NO_DATA_WITH_ID(req.body.noi_dung_id) + ", kh\u00F4ng c\u00F3 g\u00EC \u0111\u1EC3 update"
                        }
                    };
                }
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        /**
         * @author Nhật Anh 17/04/2017
         *
         * xóa dữ liệu dựa theo id
         * truyền vào 1 hay nhiều id (number)
         *
         * POST /api/noi_dung/delete
         */
        this.delete = function (req, res) {
            if (!req.body.user_id) {
                res.status(400).json({
                    error: {
                        error_type: util_1.VARIABLES.ErrorMessage.MISSING_PARAM,
                        message: util_1.VARIABLES.ErrorMessage.NEED_COLUMN_IN(['user_id'], ['mảng int'], 'body')
                    }
                });
                return;
            }
            var promiseResult = _this._tintucRepo.delete(req.body.user_id)
                .then(function (result) {
                if (result.rowCount > 0) {
                    return { result: [], count: result.rowCount };
                }
                else {
                    return {
                        status: 400,
                        error: {
                            error_type: util_1.VARIABLES.ErrorMessage.NO_DATA,
                            message: util_1.VARIABLES.ErrorMessage.NO_DATA_WITH_ID(req.body.user_id) + ", kh\u00F4ng c\u00F3 g\u00EC \u0111\u1EC3 delete"
                        }
                    };
                }
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        /**
         * @author Nhật Anh 17/04/2017
         *
         *  api noi_dung/search
         * đưa vào page, per_page, và các cột zới giá trị cần tìm
         * nếu chỉ có page và per_page thì sẽ trả zề hết
         *
         *
         * POST /api/noi_dung/search
         */
        // search = (req: express.Request, res: express.Response): void => {
        //     let obj = req.body;
        //     let limit = obj.per_page || 10; //gioi han no la 10 trang
        //     let page = obj.page; //trang
        //     let order = obj.order || 'tin_tuc_id+0'; //phan can search
        //     let current_status = obj.current_status;
        //     let offset;
        //  if(!page || page === 1) {
        //         offset = 0;//neu chi co 1 trang  thi lay tu 0 , la lay het bat dau  0
        //     }
        // else{
        //         offset = limit * (page - 1);
        //         //neu lon hon 1 thi lay 10*(5-1) 40 co nghia la lay tu dong 40 chu khong phai lay tu d
        //     }
        //     delete obj.page;
        //     delete obj.per_page;
        //     delete obj.order;
        //     if (_.isEmpty(current_status)) {
        //         delete obj.current_status;
        //     }
        //     let promiseNumberOfRow = this._tintucRepo.count(obj);
        //     let promiseResult = this._tintucRepo.search(obj, order, limit, offset)
        //         .then(result => {
        //             let noidungs = result.rows.map(r => this.rowMapper(r));
        //             return noidungs;
        //         })
        //          .then(noidungs => {
        //             return promiseNumberOfRow.then(numberOfRow => {
        //                 return { result: noidungs, number_of_all_data: numberOfRow.rows[0] };
        //             })
        //          });
        //     ControllerUtil.resovleResponse(res, promiseResult);
        // }
        this.search = function (req, res) {
            var obj = req.body;
            var limit = obj.per_page || 2;
            var page = obj.page;
            var order = obj.order || 'user_id+0';
            var current_status = obj.current_status;
            var offset;
            if (!page || page === 1) {
                offset = 0;
            }
            else {
                offset = limit * (page - 1);
            }
            delete obj.page;
            delete obj.per_page;
            delete obj.order;
            if (_.isEmpty(current_status)) {
                delete obj.current_status;
            }
            // let promiseNumberOfRow = this._tintucRepo.count(obj);
            var promiseResult = _this._tintucRepo.search(obj, order, limit, offset)
                .then(function (result) {
                var noidungs = result.rows.map(function (r) { return _this.rowMapper(r); });
                return noidungs;
            });
            // .then(noidungs => {
            //     return promiseNumberOfRow.then(numberOfRow => {
            //         return { result: noidungs, number_of_all_data: numberOfRow.rows[0] };
            //     })
            // });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        /**
         * /api/noi_dung/seek?id=2&per_page=10&time='2017-02-01'&upperBound=true
         */
        /*
           public seek = (req: express.Request, res: express.Response): void => {
               let id = req.query.id || null;
               let per_page = req.query.per_page;
               let operator;
               if (req.query.upper_bound && req.query.upper_bound === 'true') {
                   operator = OperatorEnum.UPPERBOUND;
               } else {
                   operator = OperatorEnum.LOWERBOUND;
               }
       
       
               let promiseResult = this._tintucRepo.seek(per_page, operator, id)
                   .then(result => {
                       let noidungs = result.rows.map(r => this.rowMapper(r));
                       return { result: noidungs };
                   });
       
               ControllerUtil.resovleResponse(res, promiseResult);
           }
           */
        this.seek = function (req, res) {
            var promiseResult = _this._tintucRepo.insert(req.body)
                .then(function (result) {
                if (result.rowCount > 0) {
                    return { result: [], count: result.rowCount };
                }
                else {
                    return {
                        status: 400,
                        error: {
                            error_type: util_1.VARIABLES.ErrorMessage.NO_DATA,
                            message: util_1.VARIABLES.ErrorMessage.NO_DATA_WITH_ID(req.body.user_id) + ", kh\u00F4ng c\u00F3 g\u00EC \u0111\u1EC3 update"
                        }
                    };
                }
            });
            util_1.ControllerUtil.resovleResponse(res, promiseResult);
        };
        this._tintucRepo = new repositories_1.TinTucRepository();
    }
    /**
     * @author Nhật Anh 17/04/2017
     *
     * chuyển kết quả truy vấn thành Object
     *
     * @private
     * @param {any} queryResult kết quả truy vấn
     * @returns {tintuc}
     *
     */
    TinTucController.prototype.rowMapper = function (queryResult) {
        var tintuc = new models_1.TinTuc();
        tintuc.user_id = queryResult.user_id;
        tintuc.username = queryResult.username;
        tintuc.user_update = queryResult.user_update;
        return tintuc;
    };
    return TinTucController;
}());
exports.default = TinTucController;
//# sourceMappingURL=tintuc-controller.js.map