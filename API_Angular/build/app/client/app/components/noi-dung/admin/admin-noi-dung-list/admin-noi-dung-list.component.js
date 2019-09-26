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
var sweetalert2_1 = require("sweetalert2");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var alert_1 = require("../../../../util/alert");
var manage_state_service_1 = require("../../../../shared/manage-state.service");
var noidung_service_1 = require("../../shared/noidung.service");
var _ = require("lodash");
var order_by_component_1 = require("../../shared/order-by/order-by.component");
var search_component_1 = require("../../shared/search/search.component");
var status_component_1 = require("../../shared/status/status.component");
var paging_component_1 = require("../../../../shared/paging/paging.component");
var AdminNoiDungCreateComponent_1 = require("../admin-noi-dung-detail/admin-noi-dung-create/AdminNoiDungCreateComponent");
var admin_noi_dung_edit_component_1 = require("../admin-noi-dung-detail/admin-noi-dung-edit/admin-noi-dung-edit.component");
var AdminNoiDungListComponent = /** @class */ (function () {
    function AdminNoiDungListComponent(noiDungService, manageStateService, modal, overlay, vcRef, router) {
        this.noiDungService = noiDungService;
        this.manageStateService = manageStateService;
        this.modal = modal;
        this.overlay = overlay;
        this.vcRef = vcRef;
        this.router = router;
        this._total = 0;
        this._checkedListID = [];
        this._keyValue = 'noi-dung-component';
        this._isLoaded = false;
        this._addOnComponents = [];
        overlay.defaultViewContainer = vcRef;
    }
    AdminNoiDungListComponent_1 = AdminNoiDungListComponent;
    AdminNoiDungListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._addOnComponents = [
            this._statusComponent,
            this._pagingComponent,
            this._searchComponent,
            this._orderComponent
        ];
        // bỏ comment để test loading
        // setTimeout(() => {
        //     this._data = this.getData().then((result) => {
        //         this._isLoaded = true;
        //         return result;
        //     });
        // }, 3000);
        this.loadState();
        this._data = this.getData().then(function (result) {
            _this._isLoaded = true;
            _this._total = result.length;
            return result.data;
        });
    };
    AdminNoiDungListComponent.prototype.openCreateModal = function () {
        var _this = this;
        this.modal.open(AdminNoiDungCreateComponent_1.AdminNoiDungCreateComponent, angular2_modal_1.overlayConfigFactory({}, bootstrap_1.BSModalContext))
            .then(function (value) {
            return value.result;
        })
            .then(function (result) {
            if (!result.exit) {
                _this.stateChange();
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    AdminNoiDungListComponent.prototype.openCreate = function () {
        this.router.navigate(['admin/quan-ly-noi-dung/admin-tao-moi-noi-dung']);
    };
    AdminNoiDungListComponent.prototype.openEditModal = function (id) {
        var _this = this;
        this.modal.open(admin_noi_dung_edit_component_1.AdminNoiDungEditComponent, angular2_modal_1.overlayConfigFactory({ id: id }, bootstrap_1.BSModalContext))
            .then(function (value) { return value.result; })
            .then(function (result) {
            if (!result.exit) {
                _this.stateChange();
            }
        })
            .catch(function (error) { return console.log(error); });
    };
    AdminNoiDungListComponent.prototype.openEdit = function (id) {
        this.router.navigate(['admin/quan-ly-noi-dung/admin-sua-noi-dung', id]);
    };
    AdminNoiDungListComponent.prototype.deleteByChecked = function () {
        var _this = this;
        alert_1.Alert.showDeleteAlertWithCancel('Có chắc muốn xóa dữ liệu không?', 'Dữ liệu sẽ bị xóa vĩnh viễn không thể quay lại')
            .then(function () {
            var listId = _this._checkedListID;
            if (listId.length !== 0) {
                _this.noiDungService.deleteNoiDung(listId)
                    .then(function () {
                    _this.stateChange();
                    _this._checkedListID = [];
                    sweetalert2_1.default('Đã xóa', 'Dữ liệu được chọn đã xóa', 'success');
                });
            }
            else {
                sweetalert2_1.default('Bạn chưa chọn gì cả', 'Không có dữ liệu nào bị xóa', 'info');
            }
        });
    };
    AdminNoiDungListComponent.prototype.checkBoxChecked = function (checked, noidung) {
        if (checked) {
            this._checkedListID.push(noidung.noi_dung_id);
        }
        else {
            var index = this._checkedListID.indexOf(noidung.noi_dung_id);
            if (index !== -1) {
                this._checkedListID.splice(index, 1);
            }
        }
    };
    AdminNoiDungListComponent.prototype.identify = function (index, item) {
        return item.noi_dung_id;
    };
    AdminNoiDungListComponent.prototype.deleteByFilter = function () {
        var _this = this;
        alert_1.Alert.showDeleteAlertWithCancel('Có chắc muốn xóa dữ liệu không?', 'Dữ liệu sẽ bị xóa vĩnh viễn không thể quay lại')
            .then(function () {
            if (_this.isFiltering()) {
                _this.deleteRoutine(_this._data)
                    .catch(function (err) {
                    console.log(err);
                    console.log('done');
                    _this.stateChange();
                    sweetalert2_1.default('Đã xóa', 'Dữ liệu được chọn đã xóa', 'success');
                });
            }
            else {
                sweetalert2_1.default('Bạn chưa chọn gì cả', 'Không có dữ liệu nào bị xóa', 'info');
            }
        });
    };
    AdminNoiDungListComponent.prototype.isFiltering = function () {
        for (var i = 0; i < this._addOnComponents.length; i++) {
            if (!_.isEmpty(this._addOnComponents[i].getState().value)) {
                console.log(this._addOnComponents[i].getState().value);
                return true;
            }
        }
        return false;
    };
    AdminNoiDungListComponent.prototype.deleteRoutine = function (promise) {
        var _this = this;
        return promise.then(function (result) {
            if (result.length > 0) {
                console.log('run delete: ' + _this._currentPage);
                var ids = result.map(function (rs) { return rs.noi_dung_id; });
                return _this.noiDungService.deleteNoiDung(ids);
            }
            return Promise.reject('no more');
        }).then(function () {
            _this._pagingComponent.page = _this._currentPage + 1;
            return _this.deleteRoutine(_this.getData().then(function (result) { return result.data; }));
        });
    };
    AdminNoiDungListComponent.prototype.getData = function () {
        var _this = this;
        var body = {};
        this._addOnComponents.forEach(function (ac) {
            var state = ac.getState();
            if (state.value && state.name !== 'page') {
                body[state.name] = state.value;
            }
            if (state.name === 'page' && state.value) {
                _this._currentPage = state.value;
                _this.saveState();
            }
        });
        return this.noiDungService.searchNoiDung(body, this._currentPage, this._itemsPerPage);
    };
    AdminNoiDungListComponent.prototype.updatePerPage = function () {
        this.saveState();
        this.stateChange();
    };
    AdminNoiDungListComponent.prototype.saveState = function () {
        this.manageStateService.save(this._keyValue + ':perPage', this._itemsPerPage);
        this.manageStateService.save(this._keyValue + ':currentPage', this._currentPage);
    };
    AdminNoiDungListComponent.prototype.loadState = function () {
        this._itemsPerPage = this.manageStateService.load(this._keyValue + ':perPage') || 10;
        this._currentPage = this.manageStateService.load(this._keyValue + ':currentPage') || 1;
    };
    AdminNoiDungListComponent.prototype.stateChange = function () {
        var _this = this;
        this._data = this.getData().then(function (result) {
            _this._total = result.length;
            return result.data;
        });
    };
    var AdminNoiDungListComponent_1;
    __decorate([
        core_1.ViewChild(status_component_1.StatusComponent),
        __metadata("design:type", status_component_1.StatusComponent)
    ], AdminNoiDungListComponent.prototype, "_statusComponent", void 0);
    __decorate([
        core_1.ViewChild(paging_component_1.PagingComponent),
        __metadata("design:type", paging_component_1.PagingComponent)
    ], AdminNoiDungListComponent.prototype, "_pagingComponent", void 0);
    __decorate([
        core_1.ViewChild(search_component_1.SearchComponent),
        __metadata("design:type", search_component_1.SearchComponent)
    ], AdminNoiDungListComponent.prototype, "_searchComponent", void 0);
    __decorate([
        core_1.ViewChild(order_by_component_1.OrderbyComponent),
        __metadata("design:type", order_by_component_1.OrderbyComponent)
    ], AdminNoiDungListComponent.prototype, "_orderComponent", void 0);
    __decorate([
        core_1.ViewChild(AdminNoiDungListComponent_1),
        __metadata("design:type", AdminNoiDungListComponent)
    ], AdminNoiDungListComponent.prototype, "_noiDungListComponent", void 0);
    AdminNoiDungListComponent = AdminNoiDungListComponent_1 = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'noi-dung-list',
            templateUrl: './admin-noi-dung-list.component.html',
            styleUrls: ['./admin-noi-dung-list.component.css']
        }),
        __metadata("design:paramtypes", [noidung_service_1.NoiDungService,
            manage_state_service_1.ManageStateService,
            bootstrap_1.Modal,
            angular2_modal_1.Overlay,
            core_1.ViewContainerRef,
            router_1.Router])
    ], AdminNoiDungListComponent);
    return AdminNoiDungListComponent;
}());
exports.AdminNoiDungListComponent = AdminNoiDungListComponent;
//# sourceMappingURL=admin-noi-dung-list.component.js.map