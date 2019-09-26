"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var admin_menu_component_1 = require("./components/menu/admin-menu/admin-menu.component");
var menu_component_1 = require("./components/menu/menu/menu.component");
var admin_login_component_1 = require("./components/login/admin-login/admin-login.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
var manage_state_service_1 = require("./shared/manage-state.service");
var core_2 = require("angular2-cookie/core");
var auth_service_1 = require("./auth/auth.service");
var auth_guard_1 = require("./guards/auth.guard");
var quan_ly_noi_dung_page_1 = require("./pages/noi-dung/admin/quan-ly-noi-dung/quan-ly-noi-dung.page");
var them_noi_dung_page_1 = require("./pages/noi-dung/admin/them-noi-dung/them-noi-dung.page");
var sua_noi_dung_page_1 = require("./pages/noi-dung/admin/sua-noi-dung/sua-noi-dung.page");
var menu_page_1 = require("./pages/menu/menu.page");
//feature module
var noi_dung_module_1 = require("./components/noi-dung/noi-dung.module");
var hero_module_1 = require("./components/hero/hero.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                noi_dung_module_1.NoiDungModule,
                hero_module_1.HeroModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                admin_menu_component_1.AdminMenuComponent,
                menu_component_1.MenuComponent,
                admin_login_component_1.AdminLoginComponent,
                dashboard_component_1.DashboardComponent,
                quan_ly_noi_dung_page_1.QuanLyNoiDungPage,
                them_noi_dung_page_1.ThemNoiDungPage,
                menu_page_1.MenuPage,
                sua_noi_dung_page_1.SuaNoiDungPage
            ],
            providers: [
                manage_state_service_1.ManageStateService,
                core_2.CookieService,
                auth_service_1.AuthService,
                auth_guard_1.AuthGuard
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map