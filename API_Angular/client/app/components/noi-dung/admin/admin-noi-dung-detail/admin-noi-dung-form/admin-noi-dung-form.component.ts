import { Component, OnChanges, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

import { KeyCodeUtil } from '../../../../../util/keycode-util';
import { NumberFormatUtil } from '../../../../../util/number-format-util';

import { NoiDung, CURRENT_STATUS_VALUE } from '../../../shared/noidung.model';

@Component({
    moduleId: module.id,
    selector: 'admin-noi-dung-form',
    templateUrl: './admin-noi-dung-form.component.html',
    styleUrls: ['./admin-noi-dung-form.component.css']
})
export class AdminNoiDungFormComponent implements OnChanges, OnInit {
    private _noiDungForm: FormGroup;
    @Input() model: NoiDung;
    @Input() defaultValue: NoiDung = new NoiDung();
    @Output() emitValue = new EventEmitter();
    @Output() close = new EventEmitter();
    //giá trị cho select box bên view
    private _current_status = CURRENT_STATUS_VALUE;

    _data = ['active', 'pending'];
    _options = {
        multiple: true,
        closeOnSelect: false,
        allowClear: true,
        placeholder: 'Chọn giá trị'
    }


    // chứa error message cho view
    private _formErrors = {
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
    private _validationMessages = {
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

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.createForm();
    }

    ngOnChanges() {
        if (this.model) {
            this._noiDungForm.patchValue({
                noi_dung_id: this.model.noi_dung_id,
                tieu_de: this.model.tieu_de,
                current_status: this.model.current_status,
                noi_dung_content_big: '<p><strong>hello world in bold</strong></p>'
            });
            this.onValueChanged();
        }
    }

    private onValueChanged(data?: any) {
        this.validation();
    }

    private validation() {
        if (!this._noiDungForm) { return; }
        let form = this._noiDungForm;

        for (let field in this._formErrors) {
            this._formErrors[field] = '';
            let control = form.get(field);

            if (control && control.dirty && !control.valid) {
                let message = this._validationMessages[field];
                for (let key in control.errors) {
                    this._formErrors[field] += message[key] + ' ';
                }
            }
        }
    }

    private createForm() {
        this._noiDungForm = this.fb.group({
            noi_dung_id: [this.defaultValue.noi_dung_id || ''],
            tieu_de: [this.defaultValue.tieu_de || '', [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
            current_status: [this.defaultValue.current_status || '', Validators.required],
            value_boolean: [false],
            value_int: ['', Validators.required],
            value_time: ['', Validators.required],
            value_decimal: ['', Validators.required],
            noi_dung_content: ['', Validators.required],
            tag_text: ['', Validators.required],
            noi_dung_content_big: ['', Validators.required],
            checkbox1: [false, Validators.required],
            checkbox2: [false, Validators.required],
            checkbox3: [false, Validators.required]
        });

        this._noiDungForm.valueChanges.subscribe(data => {
            this.onValueChanged(data);
        })

        this.onValueChanged();
    }

    private onKeyDown(ev) {
        if (KeyCodeUtil.isSpecialKey(ev)) {
            return;
        } else {
            // Check if number key or backspace key
            if (KeyCodeUtil.isNumberKey(ev)) {
                let value = this._noiDungForm.get('value_decimal').value;
                console.log(value.length);
                value = NumberFormatUtil.numFormat(value);
                this._noiDungForm.patchValue({ 'value_decimal': value });
            } else {
                ev.preventDefault();
                return false;
            }
        }
    }

}