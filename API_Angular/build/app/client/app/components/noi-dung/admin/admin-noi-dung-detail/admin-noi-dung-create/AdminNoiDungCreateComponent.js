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
var angular2_modal_1 = require("angular2-modal");
var noidung_service_1 = require("../../../shared/noidung.service");
var AdminNoiDungCreateComponent = /** @class */ (function () {
    function AdminNoiDungCreateComponent(noiDungService, dialog) {
        this.noiDungService = noiDungService;
        this.dialog = dialog;
    }
    AdminNoiDungCreateComponent.prototype.onEmitValue = function (value) {
        var _this = this;
        this.noiDungService.createNoiDung(value)
            .then(function (result) { return console.log("success " + result); })
            .catch(function (error) { return console.error('Error Khi Create Noi Dung', error); })
            .then(function () { return _this.onClose(false); });
    };
    AdminNoiDungCreateComponent.prototype.onClose = function (isExit) {
        this.dialog.close({ exit: isExit });
    };
    AdminNoiDungCreateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-noi-dung-create',
            templateUrl: './admin-noi-dung-create.component.html',
            styleUrls: ['./admin-noi-dung-create.component.css']
        }),
        __metadata("design:paramtypes", [noidung_service_1.NoiDungService, angular2_modal_1.DialogRef])
    ], AdminNoiDungCreateComponent);
    return AdminNoiDungCreateComponent;
}());
exports.AdminNoiDungCreateComponent = AdminNoiDungCreateComponent;
//# sourceMappingURL=AdminNoiDungCreateComponent.js.map