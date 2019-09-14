"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg = require("pg");
var fs = require("fs");
var path = require("path");
var debug = require('debug')('pg-connect');
var PgConnect = /** @class */ (function () {
    function PgConnect() {
        this.createPool();
    }
    /**
     * chạy 1 query vào csdl, và trả về reject nếu có lỗi khi đang query
     * nó sử dụng node-pg để truy vấn
     *
     * @author đức
     * @param {string} query câu query
     * @param {any[]} [value=[]] params cho câu truy vấn
     * @returns {Promise<pg.QueryResult>} kết quả truy vấn
     *
     * @memberOf PgConnect
     */
    PgConnect.prototype.runAQuery = function (query, value) {
        if (value === void 0) { value = []; }
        return this._pool.connect()
            .then(function (client) {
            return client.query(query, value)
                .then(function (res) {
                client.release();
                return res;
            })
                .catch(function (error) {
                client.release();
                return Promise.reject(error);
            });
        });
    };
    /**
     * chạy câu query trong 1 transaction
     * sử dụng node-pg để truy vấn
     *
     * @author đức
     * @param {string} query câu query
     * @param {any[]} [value=[]] params cho câu truy vấn
     * @returns {Promise<pg.QueryResult>} kết quả truy vấn
     *
     * @memberOf PgConnect
     */
    PgConnect.prototype.runATransaction = function (query, value) {
        if (value === void 0) { value = []; }
        throw new Error('đang xây dựng');
    };
    PgConnect.prototype.createPool = function () {
        var env = process.env.NODE_ENV || 'development';
        var config = this.readConfig(env);
        this._pool = new pg.Pool(config);
        this._pool.on('error', function (error, client) {
            debug("error k\u1EBFt n\u1ED1i csdl tr\u00EAn client %s, error %s", client, error);
        });
    };
    PgConnect.prototype.readConfig = function (env) {
        var configContent = fs.readFileSync(path.join(__dirname, '..', '..', 'config', 'json-config', 'pg.config.json'), 'utf-8');
        var config = JSON.parse(configContent);
        return config[env];
    };
    PgConnect.prototype.shutDown = function () {
        this._pool.end();
    };
    return PgConnect;
}());
var pgConnect = new PgConnect();
exports.default = pgConnect;
//# sourceMappingURL=pg-connect.js.map