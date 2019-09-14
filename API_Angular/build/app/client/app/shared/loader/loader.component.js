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
var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this._color = 'red';
        this._isRunning = true;
        this._delay = 0;
    }
    Object.defineProperty(LoaderComponent.prototype, "color", {
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoaderComponent.prototype, "isRunning", {
        set: function (isRunning) {
            this._isRunning = isRunning;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoaderComponent.prototype, "delay", {
        set: function (delay) {
            this._delay = delay;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LoaderComponent.prototype, "color", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LoaderComponent.prototype, "isRunning", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], LoaderComponent.prototype, "delay", null);
    LoaderComponent = __decorate([
        core_1.Component({
            selector: 'loader',
            template: '<sk-chasing-dots [color]="_color" [isRunning]="_isRunning" [delay]="_delay"></sk-chasing-dots>'
        })
    ], LoaderComponent);
    return LoaderComponent;
}());
exports.LoaderComponent = LoaderComponent;
//# sourceMappingURL=loader.component.js.map