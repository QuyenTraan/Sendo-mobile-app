"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//shared module
var shared_module_1 = require("../../shared/shared.module");
// third party module
var ng2_select2_1 = require("ng2-select2");
var ng2_webstorage_1 = require("ng2-webstorage");
var ngx_quill_1 = require("ngx-quill");
var noidung_service_1 = require("./shared/noidung.service");
var admin_noi_dung_list_component_1 = require("./admin/admin-noi-dung-list/admin-noi-dung-list.component");
var admin_noi_dung_form_component_1 = require("./admin/admin-noi-dung-detail/admin-noi-dung-form/admin-noi-dung-form.component");
var admin_noi_dung_edit_component_1 = require("./admin/admin-noi-dung-detail/admin-noi-dung-edit/admin-noi-dung-edit.component");
var AdminNoiDungCreateComponent_1 = require("./admin/admin-noi-dung-detail/admin-noi-dung-create/AdminNoiDungCreateComponent");
var client_noi_dung_detail_component_1 = require("./client/client-noi-dung-detail/client-noi-dung-detail.component");
var dashboard_noi_dung_moi_component_1 = require("./admin/dashboard-noi-dung-moi/dashboard-noi-dung-moi.component");
var order_by_component_1 = require("./shared/order-by/order-by.component");
var search_component_1 = require("./shared/search/search.component");
var status_component_1 = require("./shared/status/status.component");
var NoiDungModule = /** @class */ (function () {
    function NoiDungModule() {
    }
    NoiDungModule = __decorate([
        core_1.NgModule({
            imports: [
                ng2_select2_1.Select2Module,
                ng2_webstorage_1.Ng2Webstorage,
                shared_module_1.SharedModule,
                ngx_quill_1.QuillModule
            ],
            declarations: [
                admin_noi_dung_list_component_1.AdminNoiDungListComponent,
                admin_noi_dung_form_component_1.AdminNoiDungFormComponent,
                client_noi_dung_detail_component_1.ClientNoiDungDetail,
                order_by_component_1.OrderbyComponent,
                search_component_1.SearchComponent,
                status_component_1.StatusComponent,
                dashboard_noi_dung_moi_component_1.DashboardNoiDungMoi,
                admin_noi_dung_edit_component_1.AdminNoiDungEditComponent,
                AdminNoiDungCreateComponent_1.AdminNoiDungCreateComponent
            ],
            providers: [noidung_service_1.NoiDungService],
            exports: [
                admin_noi_dung_list_component_1.AdminNoiDungListComponent,
                admin_noi_dung_form_component_1.AdminNoiDungFormComponent,
                client_noi_dung_detail_component_1.ClientNoiDungDetail,
                order_by_component_1.OrderbyComponent,
                search_component_1.SearchComponent,
                status_component_1.StatusComponent,
                dashboard_noi_dung_moi_component_1.DashboardNoiDungMoi,
                admin_noi_dung_edit_component_1.AdminNoiDungEditComponent,
                AdminNoiDungCreateComponent_1.AdminNoiDungCreateComponent
            ],
            entryComponents: [AdminNoiDungCreateComponent_1.AdminNoiDungCreateComponent, admin_noi_dung_edit_component_1.AdminNoiDungEditComponent]
        })
    ], NoiDungModule);
    return NoiDungModule;
}());
exports.NoiDungModule = NoiDungModule;
//# sourceMappingURL=noi-dung.module.js.map