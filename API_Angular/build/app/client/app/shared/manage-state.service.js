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
var ng2_webstorage_1 = require("ng2-webstorage");
var core_2 = require("angular2-cookie/core");
var ManageStateService = /** @class */ (function () {
    function ManageStateService(localStorageService, sessionStorageService, cookieService) {
        this.localStorageService = localStorageService;
        this.sessionStorageService = sessionStorageService;
        this.cookieService = cookieService;
    }
    ManageStateService.prototype.save = function (key, value) {
        this.cookieService.putObject(key, value);
    };
    ManageStateService.prototype.load = function (key) {
        return this.cookieService.getObject(key);
    };
    ManageStateService.prototype.saveSession = function (key, value) {
        this.sessionStorageService.store(key, value);
    };
    ManageStateService.prototype.loadSession = function (key) {
        return this.sessionStorageService.retrieve(key);
    };
    ManageStateService.prototype.clear = function (key) {
        this.cookieService.remove(key);
    };
    ManageStateService.prototype.clearSession = function () {
        this.sessionStorageService.clear();
    };
    ManageStateService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ng2_webstorage_1.LocalStorageService,
            ng2_webstorage_1.SessionStorageService,
            core_2.CookieService])
    ], ManageStateService);
    return ManageStateService;
}());
exports.ManageStateService = ManageStateService;
//# sourceMappingURL=manage-state.service.js.map