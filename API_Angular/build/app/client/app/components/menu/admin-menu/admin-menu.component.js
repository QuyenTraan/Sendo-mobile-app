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
var AdminMenuComponent = /** @class */ (function () {
    function AdminMenuComponent() {
        this.admin_page = [
            { routerLink: 'admin-noi-dung/admin-noi-dung-list', name: 'Admin Noi Dung List' },
            { routerLink: 'admin-noi-dung/admin-noi-dung-edit', name: 'Admin Noi Dung Edit' },
            { routerLink: 'admin-hero/admin-hero-detail', name: 'Admin Hero Detail' },
            { routerLink: 'admin-hero/admin-hero-list', name: 'Admin Hero List' }
        ];
    }
    AdminMenuComponent.prototype.ngOnInit = function () {
    };
    AdminMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-menu',
            templateUrl: './admin-menu.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], AdminMenuComponent);
    return AdminMenuComponent;
}());
exports.AdminMenuComponent = AdminMenuComponent;
//# sourceMappingURL=admin-menu.component.js.map