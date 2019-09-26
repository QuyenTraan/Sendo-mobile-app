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
var ThemNoiDungPage = /** @class */ (function () {
    function ThemNoiDungPage(router, service) {
        this.router = router;
        this.service = service;
    }
    ThemNoiDungPage.prototype.onEmitValue = function (value) {
        var _this = this;
        this.service.createNoiDung(value)
            .then(function (result) { return console.log("success " + result); })
            .catch(function (error) { return console.error('Error Khi Create Noi Dung', error); })
            .then(function () { return _this.onClose(); });
    };
    ThemNoiDungPage.prototype.onClose = function () {
        this.router.navigate(['/admin/quan-ly-noi-dung']);
    };
    ThemNoiDungPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'them-noi-dung-page',
            templateUrl: './them-noi-dung.page.html',
            styleUrls: ['./them-noi-dung.page.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, noidung_service_1.NoiDungService])
    ], ThemNoiDungPage);
    return ThemNoiDungPage;
}());
exports.ThemNoiDungPage = ThemNoiDungPage;
//# sourceMappingURL=them-noi-dung.page.js.map