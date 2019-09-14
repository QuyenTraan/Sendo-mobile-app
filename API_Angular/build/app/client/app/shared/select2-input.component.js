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
var forms_1 = require("@angular/forms");
var Select2InputComponent = /** @class */ (function () {
    function Select2InputComponent() {
        this.propagateChange = function (_) { };
    }
    Select2InputComponent_1 = Select2InputComponent;
    Object.defineProperty(Select2InputComponent.prototype, "selectedValue", {
        // get data() {
        //     return this._data;
        // }
        // set data(value) {
        //     this._data = value;
        // }
        get: function () {
            return this._selectedValue;
        },
        set: function (value) {
            this._selectedValue = value;
            this.propagateChange(this._selectedValue);
        },
        enumerable: true,
        configurable: true
    });
    Select2InputComponent.prototype.ngOnInit = function () {
        this._options = {
            multiple: true,
            closeOnSelect: false,
            allowClear: true,
            placeholder: 'Chọn giá trị'
        };
        this._data = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd'];
    };
    Select2InputComponent.prototype.changed = function (event) {
        this.selectedValue = event.value;
    };
    Select2InputComponent.prototype.writeValue = function (value) {
        if (value) {
            this.selectedValue = value;
        }
    };
    Select2InputComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    Select2InputComponent.prototype.registerOnTouched = function (fn) {
    };
    var Select2InputComponent_1;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Select2InputComponent.prototype, "_data", void 0);
    Select2InputComponent = Select2InputComponent_1 = __decorate([
        core_1.Component({
            selector: 'select2-input',
            template: '<select2 [data]="_data" [options]="_options" [width]="300" (valueChanged)="changed($event)"></select2>',
            providers: [
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return Select2InputComponent_1; }),
                    multi: true
                }
            ]
        })
    ], Select2InputComponent);
    return Select2InputComponent;
}());
exports.Select2InputComponent = Select2InputComponent;
//# sourceMappingURL=select2-input.component.js.map