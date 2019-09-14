import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { IAddOnComponent } from '../../../../shared/add-on.interface';
import { ManageStateService } from '../../../../shared/manage-state.service';

@Component({
    selector: 'search-bar',
    template: '<input [(ngModel)]="_searchValue" type="text" placeholder="tieu de" /> <button (click)="search()">Tim kiem</button>'
})
export class SearchComponent implements IAddOnComponent, OnInit {
    @Output() searchTrigger = new EventEmitter();
    private _searchValue = "";
    private _keyValue = 'search-bar';

    constructor(private manageStateService: ManageStateService) {
        this.loadState();
    }

    ngOnInit() {
    }

    getState() {
        return { name: 'tieu_de', value: this._searchValue };
    }

    private search() {
        this.saveState();
        this.searchTrigger.emit(this._searchValue);
    }

    private saveState() {
        this.manageStateService.save(this._keyValue, this._searchValue);
    }

    private loadState() {
        this._searchValue = this.manageStateService.load(this._keyValue);
    }
}