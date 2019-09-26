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
var manage_state_service_1 = require("../../../../shared/manage-state.service");
var StatusComponent = /** @class */ (function () {
    function StatusComponent(manageStateService) {
        this.manageStateService = manageStateService;
        this.valueUpdated = new core_1.EventEmitter();
        this._keyValue = 'status';
        this.loadState();
    }
    StatusComponent.prototype.ngOnInit = function () {
        this._options = {
            multiple: true,
            closeOnSelect: false,
            allowClear: true,
            placeholder: 'trang thai'
        };
        this._data = ['active', 'pending', 'delete'];
    };
    StatusComponent.prototype.getState = function () {
        return { name: 'current_status', value: this._statusValue };
    };
    StatusComponent.prototype.changed = function (e) {
        if (this._statusValue === e.value) {
            return;
        }
        this._statusValue = e.value;
        this.saveState();
        this.valueUpdated.emit(e.value);
    };
    StatusComponent.prototype.saveState = function () {
        this.manageStateService.save(this._keyValue, this._statusValue);
    };
    StatusComponent.prototype.loadState = function () {
        this._statusValue = this.manageStateService.load(this._keyValue);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], StatusComponent.prototype, "valueUpdated", void 0);
    StatusComponent = __decorate([
        core_1.Component({
            selector: 'status',
            template: '<select2 [value]="_statusValue" [data]="_data" [options]="_options" [width]="300" (valueChanged)="changed($event)"></select2>'
        }),
        __metadata("design:paramtypes", [manage_state_service_1.ManageStateService])
    ], StatusComponent);
    return StatusComponent;
}());
exports.StatusComponent = StatusComponent;
//# sourceMappingURL=status.component.js.map