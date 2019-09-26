import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Select2OptionData } from 'ng2-select2';

import { IAddOnComponent } from '../../../../shared/add-on.interface';
import { ManageStateService } from '../../../../shared/manage-state.service';

@Component({
    selector: 'status',
    template: '<select2 [value]="_statusValue" [data]="_data" [options]="_options" [width]="300" (valueChanged)="changed($event)"></select2>'
})
export class StatusComponent implements OnInit, IAddOnComponent {
    private _data: Array<any>;
    @Output() valueUpdated = new EventEmitter();
    private _options: Select2Options;
    private _statusValue;
    private _keyValue = 'status';

    constructor(private manageStateService: ManageStateService) {
        this.loadState();
    }

    ngOnInit() {
        this._options = {
            multiple: true,
            closeOnSelect: false,
            allowClear: true,
            placeholder: 'trang thai'
        }
        this._data = ['active', 'pending', 'delete'];
    }

    public getState() {
        return { name: 'current_status', value: this._statusValue };
    }

    private changed(e) {
        if (this._statusValue === e.value) {
            return;
        }
        this._statusValue = e.value;
        this.saveState();
        this.valueUpdated.emit(e.value);
    }

    private saveState() {
        this.manageStateService.save(this._keyValue, this._statusValue);
    }

    private loadState() {
        this._statusValue = this.manageStateService.load(this._keyValue);
    }


}