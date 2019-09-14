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
var OrderbyComponent = /** @class */ (function () {
    function OrderbyComponent(manageStateService) {
        this.manageStateService = manageStateService;
        this.valueUpdated = new core_1.EventEmitter();
        this._keySave = 'order-by';
        this.loadState();
    }
    OrderbyComponent.prototype.ngOnInit = function () {
        this.data = [
            { id: 'ID', text: 'ID', children: [{ id: 'noi_dung_id+0', text: 'ID tang dan' }, { id: 'noi_dung_id+1', text: 'ID giam dan' }] }
        ];
        this._options = {
            multiple: true,
            closeOnSelect: false,
            allowClear: true,
            placeholder: 'sap xep theo'
        };
    };
    OrderbyComponent.prototype.getState = function () {
        return { name: 'order', value: this._orderValue };
    };
    OrderbyComponent.prototype.saveState = function () {
        this.manageStateService.save(this._keySave, { value: this._orderValue, default: this._defaultValue });
    };
    OrderbyComponent.prototype.loadState = function () {
        var state = this.manageStateService.load(this._keySave);
        if (state) {
            this._orderValue = state.value;
            this._defaultValue = state.default;
        }
    };
    OrderbyComponent.prototype.changed = function (e) {
        var order = e.value.join(',');
        this._orderValue = order;
        this._defaultValue = e.value;
        this.saveState();
        this.valueUpdated.emit(order);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], OrderbyComponent.prototype, "valueUpdated", void 0);
    OrderbyComponent = __decorate([
        core_1.Component({
            selector: 'order-by',
            template: '<select2 [value]="_defaultValue" [data]="data" [options]="_options" [width]="300" (valueChanged)="changed($event)"></select2>'
        }),
        __metadata("design:paramtypes", [manage_state_service_1.ManageStateService])
    ], OrderbyComponent);
    return OrderbyComponent;
}());
exports.OrderbyComponent = OrderbyComponent;
//# sourceMappingURL=order-by.component.js.map