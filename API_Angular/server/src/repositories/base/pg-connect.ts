import * as pg from 'pg';
import * as fs from 'fs';
import * as path from 'path';
let debug = require('debug')('pg-connect');

class PgConnect {

    private _pool: pg.Pool;

    constructor() {
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
    public runAQuery(query: string, value: any[] = []): Promise<pg.QueryResult> {
        return this._pool.connect()
            .then(client => {
                return client.query(query, value)
                    .then(res => {
                        client.release();
                        return res;
                    })
                    .catch(error => {
                        client.release();
                        return Promise.reject(error);
                    });
            })

    }

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
    public runATransaction(query: string, value: any[] = []): Promise<pg.QueryResult> {
        throw new Error('đang xây dựng');
    }

    private createPool() {
        let env = process.env.NODE_ENV || 'development';
        let config = this.readConfig(env);
        this._pool = new pg.Pool(config);

        this._pool.on('error', (error, client) => {
            debug(`error kết nối csdl trên client %s, error %s`, client, error);
        })
    }

    private readConfig(env: string): pg.PoolConfig {
        let configContent: string = fs.readFileSync(path.join(__dirname, '..', '..', 'config', 'json-config', 'pg.config.json'), 'utf-8');
        let config = JSON.parse(configContent);
        return config[env];
    }

    private shutDown() {
        this._pool.end();
    }

}

let pgConnect = new PgConnect();

export default pgConnect;