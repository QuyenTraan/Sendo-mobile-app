import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { NoiDung } from './noidung.model';
import { Variable } from '../../../util/variable';

@Injectable()
export class NoiDungService {

    constructor(private http: Http) {
    }

    public getNoiDungByID(id): Promise<{ data: NoiDung }> {
        let query = `?noi_dung_id=${id}`;
        return this.callGetOneApi(query).then(jsonData => {
            return { data: jsonData.result };
        });
    }

    // public getListNoiDung(page: number, perPage: number): Promise<{ data: Array<NoiDung>, length: number }> {
    //     return this.callSearchApi({ page: page, per_page: perPage })
    //         .then(jsonData => {
    //             return {
    //                 data: jsonData.result,
    //                 length: jsonData.number_of_all_data.count
    //             }
    //         });
    // }

    public searchNoiDung(searchBody, page: number, perPage: number): Promise<{ data: Array<NoiDung>, length: number }> {
        let body = Object.assign({}, searchBody);
        body['per_page'] = perPage;
        body['page'] = page;
        return this.callSearchApi(body)
            .then(jsonData => {
                return {
                    data: jsonData.result,
                    length: jsonData.number_of_all_data.count
                }
            })
    }

    public deleteNoiDung(ids: Array<any>): Promise<any> {
        let body = { noi_dung_ids: ids };
        return this.callDeleteApi(body);
    }

    public updateNoiDung(noiDung: NoiDung): Promise<number> {
        let body = Object.assign({}, noiDung);
        body['user_update'] = 'dman';
        return this.callUpdateApi(body)
            .then(jsonData => {
                return jsonData.count;
            })
    }

    public createNoiDung(noiDung: NoiDung): Promise<number> {
        let body = Object.assign({}, noiDung);
        delete body.noi_dung_id;
        body['user_create'] = 'dman';
        body['user_update'] = 'dman';
        return this.callSaveApi(body)
            .then(jsonData => {
                return jsonData.count;
            })
    }


    private callSearchApi(body: any): Promise<any> {
        return this.http.post(`${Variable.URL}/api/noi_dung/search`, body)
            .toPromise().then(res => {
                let jsonData = res.json();
                return jsonData;
            });
    }

    private callDeleteApi(body): Promise<any> {
        return this.http.post(`${Variable.URL}/api/noi_dung/delete`, body)
            .toPromise().then(res => {
                let jsonData = res.json();
                return jsonData;
            })
    }

    private callGetOneApi(query): Promise<any> {
        return this.http.get(`${Variable.URL}/api/noi_dung/getone/${query}`)
            .toPromise().then(res => {
                let jsonData = res.json();
                return jsonData;
            })
    }

    private callUpdateApi(body): Promise<any> {
        return this.http.post(`${Variable.URL}/api/noi_dung/update`, body)
            .toPromise()
            .then(res => {
                let jsonData = res.json();
                return jsonData;
            })
    }

    private callSaveApi(body): Promise<any> {
        return this.http.post(`${Variable.URL}/api/noi_dung/save`, body)
            .toPromise()
            .then(res => {
                let jsonData = res.json();
                return jsonData;
            })
    }
}