import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Select2OptionData } from 'ng2-select2';

@Component({
    selector: 'select2-input',
    template: '<select2 [data]="_data" [options]="_options" [width]="300" (valueChanged)="changed($event)"></select2>',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Select2InputComponent),
            multi: true
        }
    ]
})
export class Select2InputComponent implements OnInit, ControlValueAccessor {
    private _options: Select2Options;
    private _selectedValue;
    @Input()
    private _data: Array<any>;
    private propagateChange = (_: any) => { };


    // get data() {
    //     return this._data;
    // }

    // set data(value) {
    //     this._data = value;
    // }

    get selectedValue() {
        return this._selectedValue;
    }

    set selectedValue(value) {
        this._selectedValue = value;
        this.propagateChange(this._selectedValue);
    }


    ngOnInit() {
        this._options = {
            multiple: true,
            closeOnSelect: false,
            allowClear: true,
            placeholder: 'Chọn giá trị'
        }

        this._data = ['aaaaa', 'bbbbb', 'ccccc', 'ddddd'];
    }

    changed(event) {
        this.selectedValue = event.value;
    }

    writeValue(value) {
        if (value) {
            this.selectedValue = value;
        }
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn) {

    }
}