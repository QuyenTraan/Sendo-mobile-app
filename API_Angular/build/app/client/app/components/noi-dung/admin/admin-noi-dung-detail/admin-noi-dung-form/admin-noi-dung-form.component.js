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
var keycode_util_1 = require("../../../../../util/keycode-util");
var number_format_util_1 = require("../../../../../util/number-format-util");
var noidung_model_1 = require("../../../shared/noidung.model");
var AdminNoiDungFormComponent = /** @class */ (function () {
    function AdminNoiDungFormComponent(fb) {
        this.fb = fb;
        this.defaultValue = new noidung_model_1.NoiDung();
        this.emitValue = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
        //giá trị cho select box bên view
        this._current_status = noidung_model_1.CURRENT_STATUS_VALUE;
        this._data = ['active', 'pending'];
        this._options = {
            multiple: true,
            closeOnSelect: false,
            allowClear: true,
            placeholder: 'Chọn giá trị'
        };
        // chứa error message cho view
        this._formErrors = {
            'noi_dung_id': '',
            'tieu_de': '',
            'current_status': '',
            'value_boolean': '',
            'value_int': '',
            'value_time': '',
            'value_decimal': '',
            'noi_dung': '',
            'select2Select': '',
            'editor': ''
        };
        // từ điển error message khi validate
        this._validationMessages = {
            'noi_dung_id': {
                'required': 'Cần phải có ID.'
            },
            'tieu_de': {
                'required': 'Cần phải có tiêu đề.',
                'maxlength': 'Tiêu đề phải không được dài quá 50 chữ.',
                'minlength': 'Tiêu đề phải có ít nhất 4 chữ.'
            },
            'current_status': {
                'required': 'Cần phải có current_status.'
            },
            'value_boolean': {
                'required': 'Cần phải có value_boolean.'
            },
            'value_int': {
                'required': 'Cần phải có value_int.'
            },
            'value_time': {
                'required': 'Cần phải có value_time.'
            },
            'value_decimal': {
                'required': 'Cần phải có value_decimal.'
            },
            'noi_dung': {
                'required': 'Cần phải có noi_dung.'
            },
            'select2Select': {
                'required': 'Cần phải có select2Select.'
            },
            'editor': {
                'required': 'Cần phải có nội dung trong editor'
            }
        };
    }
    AdminNoiDungFormComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    AdminNoiDungFormComponent.prototype.ngOnChanges = function () {
        if (this.model) {
            this._noiDungForm.patchValue({
                noi_dung_id: this.model.noi_dung_id,
                tieu_de: this.model.tieu_de,
                current_status: this.model.current_status,
                noi_dung_content_big: '<p><strong>hello world in bold</strong></p>'
            });
            this.onValueChanged();
        }
    };
    AdminNoiDungFormComponent.prototype.onValueChanged = function (data) {
        this.validation();
    };
    AdminNoiDungFormComponent.prototype.validation = function () {
        if (!this._noiDungForm) {
            return;
        }
        var form = this._noiDungForm;
        for (var field in this._formErrors) {
            this._formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var message = this._validationMessages[field];
                for (var key in control.errors) {
                    this._formErrors[field] += message[key] + ' ';
                }
            }
        }
    };
    AdminNoiDungFormComponent.prototype.createForm = function () {
        var _this = this;
        this._noiDungForm = this.fb.group({
            noi_dung_id: [this.defaultValue.noi_dung_id || ''],
            tieu_de: [this.defaultValue.tieu_de || '', [forms_1.Validators.required, forms_1.Validators.maxLength(50), forms_1.Validators.minLength(4)]],
            current_status: [this.defaultValue.current_status || '', forms_1.Validators.required],
            value_boolean: [false],
            value_int: ['', forms_1.Validators.required],
            value_time: ['', forms_1.Validators.required],
            value_decimal: ['', forms_1.Validators.required],
            noi_dung_content: ['', forms_1.Validators.required],
            tag_text: ['', forms_1.Validators.required],
            noi_dung_content_big: ['', forms_1.Validators.required],
            checkbox1: [false, forms_1.Validators.required],
            checkbox2: [false, forms_1.Validators.required],
            checkbox3: [false, forms_1.Validators.required]
        });
        this._noiDungForm.valueChanges.subscribe(function (data) {
            _this.onValueChanged(data);
        });
        this.onValueChanged();
    };
    AdminNoiDungFormComponent.prototype.onKeyDown = function (ev) {
        if (keycode_util_1.KeyCodeUtil.isSpecialKey(ev)) {
            return;
        }
        else {
            // Check if number key or backspace key
            if (keycode_util_1.KeyCodeUtil.isNumberKey(ev)) {
                var value = this._noiDungForm.get('value_decimal').value;
                console.log(value.length);
                value = number_format_util_1.NumberFormatUtil.numFormat(value);
                this._noiDungForm.patchValue({ 'value_decimal': value });
            }
            else {
                ev.preventDefault();
                return false;
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", noidung_model_1.NoiDung)
    ], AdminNoiDungFormComponent.prototype, "model", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", noidung_model_1.NoiDung)
    ], AdminNoiDungFormComponent.prototype, "defaultValue", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AdminNoiDungFormComponent.prototype, "emitValue", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AdminNoiDungFormComponent.prototype, "close", void 0);
    AdminNoiDungFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'admin-noi-dung-form',
            templateUrl: './admin-noi-dung-form.component.html',
            styleUrls: ['./admin-noi-dung-form.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], AdminNoiDungFormComponent);
    return AdminNoiDungFormComponent;
}());
exports.AdminNoiDungFormComponent = AdminNoiDungFormComponent;
//# sourceMappingURL=admin-noi-dung-form.component.js.map