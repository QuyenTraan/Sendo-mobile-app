"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_pagination_1 = require("ng2-pagination");
var ng_spin_kit_1 = require("ng-spin-kit");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var ng2_select2_1 = require("ng2-select2");
var loader_component_1 = require("./loader/loader.component");
var paging_component_1 = require("./paging/paging.component");
var select2_input_component_1 = require("./select2-input.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                ng2_pagination_1.Ng2PaginationModule,
                ng_spin_kit_1.NgSpinKitModule,
                angular2_modal_1.ModalModule.forRoot(),
                bootstrap_1.BootstrapModalModule,
                ng2_select2_1.Select2Module
            ],
            declarations: [loader_component_1.LoaderComponent, paging_component_1.PagingComponent, select2_input_component_1.Select2InputComponent],
            exports: [
                loader_component_1.LoaderComponent,
                paging_component_1.PagingComponent,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                common_1.CommonModule,
                ng2_pagination_1.Ng2PaginationModule,
                select2_input_component_1.Select2InputComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map