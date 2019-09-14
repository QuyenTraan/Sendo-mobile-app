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
var auth_service_1 = require("../../../auth/auth.service");
var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.setMessage();
    }
    AdminLoginComponent.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    };
    AdminLoginComponent.prototype.login = function () {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/admin';
                // Redirect the user
                _this.router.navigate([redirect]);
            }
        });
    };
    AdminLoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    AdminLoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-login',
            templateUrl: './admin-login.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());
exports.AdminLoginComponent = AdminLoginComponent;
//# sourceMappingURL=admin-login.component.js.map