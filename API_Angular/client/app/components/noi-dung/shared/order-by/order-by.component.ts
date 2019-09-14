import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Select2OptionData } from 'ng2-select2';
import { IAddOnComponent } from '../../../../shared/add-on.interface';
import { ManageStateService } from '../../../../shared/manage-state.service';

@Component({
    selector: 'order-by',
    template: '<select2 [value]="_defaultValue" [data]="data" [options]="_options" [width]="300" (valueChanged)="changed($event)"></select2>'
})
export class OrderbyComponent implements OnInit, IAddOnComponent {
    private data: Array<Select2OptionData>;
    @Output() valueUpdated = new EventEmitter();
    private _options: Select2Options;
    private _orderValue;
    private _defaultValue;
    private _keySave = 'order-by';

    constructor(private manageStateService: ManageStateService) {
        this.loadState();
    }

    ngOnInit() {
        this.data = [
            { id: 'ID', text: 'ID', children: [{ id: 'noi_dung_id+0', text: 'ID tang dan' }, { id: 'noi_dung_id+1', text: 'ID giam dan' }] }
        ]

        this._options = {
            multiple: true,
            closeOnSelect: false,
            allowClear: true,
            placeholder: 'sap xep theo'
        }
    }

    getState() {
        return { name: 'order', value: this._orderValue };
    }

    private saveState() {
        this.manageStateService.save(this._keySave, { value: this._orderValue, default: this._defaultValue });
    }

    private loadState() {
        let state = this.manageStateService.load(this._keySave);
        if (state) {
            this._orderValue = state.value;
            this._defaultValue = state.default;
        }

    }

    private changed(e) {
        let order = e.value.join(',');
        this._orderValue = order;
        this._defaultValue = e.value;
        this.saveState();
        this.valueUpdated.emit(order);
    }


}