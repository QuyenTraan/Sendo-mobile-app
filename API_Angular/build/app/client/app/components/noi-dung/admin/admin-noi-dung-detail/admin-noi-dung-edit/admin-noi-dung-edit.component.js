"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var noidung_service_1 = require("../../../shared/noidung.service");
var ModalContext = /** @class */ (function (_super) {
    __extends(ModalContext, _super);
    function ModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ModalContext;
}(bootstrap_1.BSModalContext));
exports.ModalContext = ModalContext;
var AdminNoiDungEditComponent = /** @class */ (function () {
    function AdminNoiDungEditComponent(noiDungService, dialog) {
        this.noiDungService = noiDungService;
        this.dialog = dialog;
    }
    AdminNoiDungEditComponent.prototype.ngOnInit = function () {
        this.getNoiDungById(this.dialog.context.id);
    };
    AdminNoiDungEditComponent.prototype.getNoiDungById = function (id) {
        var _this = this;
        this.noiDungService.getNoiDungByID(id)
            .then(function (result) {
            _this._noiDung = result.data;
        });
    };
    AdminNoiDungEditComponent.prototype.onEmitValue = function (value) {
        var _this = this;
        this.noiDungService.updateNoiDung(value)
            .then(function (result) { return console.log("success " + result); })
            .catch(function (error) { return console.error('error khi update', error); })
            .then(function () { return _this.onClose(false); });
    };
    AdminNoiDungEditComponent.prototype.onClose = function (isExit) {
        this.dialog.close({ exit: isExit });
    };
    AdminNoiDungEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-noi-dung-edit',
            templateUrl: './admin-noi-dung-edit.component.html'
        }),
        __metadata("design:paramtypes", [noidung_service_1.NoiDungService,
            angular2_modal_1.DialogRef])
    ], AdminNoiDungEditComponent);
    return AdminNoiDungEditComponent;
}());
exports.AdminNoiDungEditComponent = AdminNoiDungEditComponent;
//# sourceMappingURL=admin-noi-dung-edit.component.js.map