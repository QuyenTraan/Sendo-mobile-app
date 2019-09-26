import { Component, Input, Output, EventEmitter } from '@angular/core'

import { IAddOnComponent } from '../add-on.interface';

@Component({
    moduleId: module.id,
    selector: 'paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.css']
})
export class PagingComponent implements IAddOnComponent {
    @Output() changePage = new EventEmitter();
    private _page;

    private pageChange(page) {
        this._page = page;
        this.changePage.emit(page);
    }

    public get page() {
        return this._page;
    }

    @Input()
    public set page(value) {
        this._page = value;
    }

    getState() {
        return { name: 'page', value: this._page };
    }
}