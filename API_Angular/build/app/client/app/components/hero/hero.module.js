"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("../../shared/shared.module");
var admin_hero_detail_component_1 = require("./admin/admin-hero-detail/admin-hero-detail.component");
var admin_hero_list_component_1 = require("./admin/admin-hero-list/admin-hero-list.component");
var client_hero_detail_component_1 = require("./client/client-hero-detail/client-hero-detail.component");
var dashboard_hero_component_1 = require("./admin/dashboard-hero/dashboard-hero.component");
var HeroModule = /** @class */ (function () {
    function HeroModule() {
    }
    HeroModule = __decorate([
        core_1.NgModule({
            imports: [shared_module_1.SharedModule],
            declarations: [
                admin_hero_detail_component_1.AdminHeroDetailComponent,
                admin_hero_list_component_1.AdminHeroListComponent,
                client_hero_detail_component_1.ClientHeroDetailComponent,
                dashboard_hero_component_1.DashboardHeroComponent
            ],
            exports: [
                dashboard_hero_component_1.DashboardHeroComponent,
                admin_hero_detail_component_1.AdminHeroDetailComponent,
                admin_hero_list_component_1.AdminHeroListComponent,
                client_hero_detail_component_1.ClientHeroDetailComponent
            ]
        })
    ], HeroModule);
    return HeroModule;
}());
exports.HeroModule = HeroModule;
//# sourceMappingURL=hero.module.js.map