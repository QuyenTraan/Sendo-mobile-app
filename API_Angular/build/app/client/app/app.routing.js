"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var menu_component_1 = require("./components/menu/menu/menu.component");
var auth_guard_1 = require("./guards/auth.guard");
var admin_login_component_1 = require("./components/login/admin-login/admin-login.component");
var dashboard_component_1 = require("./pages/dashboard/dashboard.component");
var client_hero_detail_component_1 = require("./components/hero/client/client-hero-detail/client-hero-detail.component");
var admin_noi_dung_list_component_1 = require("./components/noi-dung/admin/admin-noi-dung-list/admin-noi-dung-list.component");
var client_noi_dung_detail_component_1 = require("./components/noi-dung/client/client-noi-dung-detail/client-noi-dung-detail.component");
var quan_ly_noi_dung_page_1 = require("./pages/noi-dung/admin/quan-ly-noi-dung/quan-ly-noi-dung.page");
var them_noi_dung_page_1 = require("./pages/noi-dung/admin/them-noi-dung/them-noi-dung.page");
var menu_page_1 = require("./pages/menu/menu.page");
var sua_noi_dung_page_1 = require("./pages/noi-dung/admin/sua-noi-dung/sua-noi-dung.page");
var appRoutes = [
    {
        // client path
        path: '', component: menu_component_1.MenuComponent, children: [
            {
                path: 'noi-dung', children: [
                    { path: '', redirectTo: 'noi-dung-detail', pathMatch: 'full' },
                    { path: 'noi-dung-detail', component: client_noi_dung_detail_component_1.ClientNoiDungDetail }
                ]
            },
            {
                path: 'hero', children: [
                    { path: '', redirectTo: 'hero-detail', pathMatch: 'full' },
                    { path: 'hero-detail', component: client_hero_detail_component_1.ClientHeroDetailComponent }
                ]
            }
        ]
    },
    {
        //admin path
        path: 'admin', canActivate: [auth_guard_1.AuthGuard], children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: menu_page_1.MenuPage },
            {
                path: 'quan-ly-noi-dung', component: quan_ly_noi_dung_page_1.QuanLyNoiDungPage, children: [
                    { path: '', redirectTo: 'admin-noi-dung-list', pathMatch: 'full' },
                    { path: 'admin-noi-dung-list', component: admin_noi_dung_list_component_1.AdminNoiDungListComponent },
                    { path: 'admin-tao-moi-noi-dung', component: them_noi_dung_page_1.ThemNoiDungPage },
                    { path: 'admin-sua-noi-dung/:id', component: sua_noi_dung_page_1.SuaNoiDungPage }
                ]
            },
            // {
            //   path: 'quan-ly-hero', children: [
            //     { path: '', redirectTo: 'admin-hero-list', pathMatch: 'full' },
            //     { path: 'admin-hero-list', component: AdminHeroListComponent },
            //     { path: 'admin-hero-detail', component: AdminHeroDetailComponent }
            //   ]
            // },
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent }
        ]
    },
    {
        path: 'admin/login', component: admin_login_component_1.AdminLoginComponent
    }
    // otherwise redirect to error --- cai nay tao mot page error roi them sau
    //{ path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes, { useHash: false })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routing.js.map