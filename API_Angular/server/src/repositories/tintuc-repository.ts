
import * as validator from 'validator';
import * as pg from 'pg';
import * as express from 'express';

import { TinTuc, TinTucCurrentStatusEnum } from '../models';

import { RepoUtil } from './util';
import { pgConnect } from './base';
import * as _ from 'lodash';

interface QueryOption {
    tieu_de?: string;
    user_id?: number;
    noi_dung?: string;
}

export class TinTucRepository {

    constructor() {
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
    public search(option: QueryOption, orderBy?: string, limit?: number, offset?: number): Promise<pg.QueryResult> {
        let queryText = " SELECT * FROM account WHERE username LIKE '%minhtuan'; $1";
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

        return pgConnect.runAQuery(queryText)
            .catch(error => {
                error['queryText'] = queryText;
                return Promise.reject(error);
            });
    }

    public seek(per_page: number, operator: string, id: number = null): Promise<pg.QueryResult> {
        let query = `select * from account where user_id= $1`;
    

        return pgConnect.runAQuery(query, [])
            .catch(error => {
                error['value'] = TinTuc;
                return Promise.reject(error);
            });
    }

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

    public getTop(): Promise<pg.QueryResult> {


        let queryText = `select * from account`;

        return pgConnect.runAQuery(queryText)
            .catch(error => {
                error['queryText'] = queryText;
                return Promise.reject(error);
            });
    }

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
    public getOne(id: number): Promise<pg.QueryResult> {
        let queryText = `select * from mon_an where nguyen_lieu ::json->>'id'='$1'`;
       console.log('j');
        return pgConnect.runAQuery(queryText, [id])
            .catch(error => {
                error['queryText'] = queryText;
                return Promise.reject(error);
            });
    }

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
    public delete(ids: number[]): Promise<pg.QueryResult> {
        let queryText;
        queryText = `DELETE  FROM account WHERE user_id = $1`;

        return pgConnect.runAQuery(queryText, [ids])
            .catch(error => {
                error['queryText'] = queryText;
                // console.log(queryText)
                return Promise.reject(error);
            });
    }

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
    public insert(tintuc: TinTuc): Promise<pg.QueryResult> {
        let queryText;
        queryText = `
            INSERT INTO account (
                user_id, username, password, email, created_on, last_login)
             VALUES (
                    $1,
                    $2,
                    $3,
                    $4,
                    $5
                    $6
                    );
                    `;
        return pgConnect.runAQuery(queryText,
            [
                tintuc.user_id,
                tintuc.username,
                tintuc.password,
                tintuc.email,
            
            ])
            .catch(error => {
                error['queryText'] = queryText;
                error['value'] = tintuc;
                return Promise.reject(error);
            });
    }

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
    public update(tintuc : TinTuc): Promise<pg.QueryResult> {
        // let setQuery = RepoUtil.buildSetQuery(option, ['username', 'user_id']);
        // setQuery.params.push(option.user_id);
        // setQuery.params.push(option.user_id);

        // let queryText = `UPDATE "account"
        //     ${setQuery.query}, username = $${setQuery.params.length}
        // 	WHERE "user_id" = $${setQuery.params.length - 1};`;
        let queryText;
        queryText = 'UPDATE account SET username =$2 where user_id=$1';
        console.log(tintuc.user_id);
        console.log(tintuc.username);
        
    

        return pgConnect.runAQuery(queryText, [
            tintuc.user_id,
            tintuc.username
        ])//cho do vi tri nen doi dolla 
            .catch(error => {
                error['queryText'] = queryText;
                return Promise.reject(error);
            });
    }

    public count(object = {}): Promise<pg.QueryResult> {
        if (_.isEmpty(object)) {
            return pgConnect.runAQuery('select count(tin_tuc_id) from tin_tuc');
        }

        let query = 'select count(user_id) from tin_tuc';
        let where = RepoUtil.buildWhereQuery(object);
        return pgConnect.runAQuery(query + ` ${where.query}`, where.params);
    }






}
