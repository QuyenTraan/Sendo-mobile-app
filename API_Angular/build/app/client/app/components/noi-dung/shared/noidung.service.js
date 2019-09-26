"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var variable_1 = require("../../../util/variable");
var NoiDungService = /** @class */ (function () {
    function NoiDungService(http) {
        this.http = http;
    }
    NoiDungService.prototype.getNoiDungByID = function (id) {
        var query = "?noi_dung_id=" + id;
        return this.callGetOneApi(query).then(function (jsonData) {
            return { data: jsonData.result };
        });
    };
    // public getListNoiDung(page: number, perPage: number): Promise<{ data: Array<NoiDung>, length: number }> {
    //     return this.callSearchApi({ page: page, per_page: perPage })
    //         .then(jsonData => {
    //             return {
    //                 data: jsonData.result,
    //                 length: jsonData.number_of_all_data.count
    //             }
    //         });
    // }
    NoiDungService.prototype.searchNoiDung = function (searchBody, page, perPage) {
        var body = Object.assign({}, searchBody);
        body['per_page'] = perPage;
        body['page'] = page;
        return this.callSearchApi(body)
            .then(function (jsonData) {
            return {
                data: jsonData.result,
                length: jsonData.number_of_all_data.count
            };
        });
    };
    NoiDungService.prototype.deleteNoiDung = function (ids) {
        var body = { noi_dung_ids: ids };
        return this.callDeleteApi(body);
    };
    NoiDungService.prototype.updateNoiDung = function (noiDung) {
        var body = Object.assign({}, noiDung);
        body['user_update'] = 'dman';
        return this.callUpdateApi(body)
            .then(function (jsonData) {
            return jsonData.count;
        });
    };
    NoiDungService.prototype.createNoiDung = function (noiDung) {
        var body = Object.assign({}, noiDung);
        delete body.noi_dung_id;
        body['user_create'] = 'dman';
        body['user_update'] = 'dman';
        return this.callSaveApi(body)
            .then(function (jsonData) {
            return jsonData.count;
        });
    };
    NoiDungService.prototype.callSearchApi = function (body) {
        return this.http.post(variable_1.Variable.URL + "/api/noi_dung/search", body)
            .toPromise().then(function (res) {
            var jsonData = res.json();
            return jsonData;
        });
    };
    NoiDungService.prototype.callDeleteApi = function (body) {
        return this.http.post(variable_1.Variable.URL + "/api/noi_dung/delete", body)
            .toPromise().then(function (res) {
            var jsonData = res.json();
            return jsonData;
        });
    };
    NoiDungService.prototype.callGetOneApi = function (query) {
        return this.http.get(variable_1.Variable.URL + "/api/noi_dung/getone/" + query)
            .toPromise().then(function (res) {
            var jsonData = res.json();
            return jsonData;
        });
    };
    NoiDungService.prototype.callUpdateApi = function (body) {
        return this.http.post(variable_1.Variable.URL + "/api/noi_dung/update", body)
            .toPromise()
            .then(function (res) {
            var jsonData = res.json();
            return jsonData;
        });
    };
    NoiDungService.prototype.callSaveApi = function (body) {
        return this.http.post(variable_1.Variable.URL + "/api/noi_dung/save", body)
            .toPromise()
            .then(function (res) {
            var jsonData = res.json();
            return jsonData;
        });
    };
    NoiDungService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], NoiDungService);
    return NoiDungService;
}());
exports.NoiDungService = NoiDungService;
//# sourceMappingURL=noidung.service.js.map