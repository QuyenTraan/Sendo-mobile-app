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
var router_1 = require("@angular/router");
var noidung_service_1 = require("../../../../components/noi-dung/shared/noidung.service");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/first");
var SuaNoiDungPage = /** @class */ (function () {
    function SuaNoiDungPage(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    SuaNoiDungPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.first().toPromise()
            .then(function (params) { return _this.service.getNoiDungByID(params['id']); })
            .then(function (result) { return _this._noiDung = result.data; })
            .catch(function (error) { return console.error('Error khi get noi dung', error); });
    };
    SuaNoiDungPage.prototype.onEmitValue = function (value) {
        var _this = this;
        this.service.updateNoiDung(value)
            .then(function (result) { return console.log("success " + result); })
            .catch(function (error) { return console.error('error khi update', error); })
            .then(function () { return _this.onClose(); });
    };
    SuaNoiDungPage.prototype.onClose = function () {
        this.router.navigate(['/admin/quan-ly-noi-dung']);
    };
    SuaNoiDungPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sua-noi-dung-page',
            templateUrl: './sua-noi-dung.page.html',
            styleUrls: ['./sua-noi-dung.page.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, noidung_service_1.NoiDungService])
    ], SuaNoiDungPage);
    return SuaNoiDungPage;
}());
exports.SuaNoiDungPage = SuaNoiDungPage;
//# sourceMappingURL=sua-noi-dung.page.js.map