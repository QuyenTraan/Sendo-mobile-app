import { Component, OnInit } from '@angular/core';
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { NoiDungService } from '../../../shared/noidung.service';
import { NoiDung } from '../../../shared/noidung.model';

export class ModalContext extends BSModalContext {
    public id: number;
}

@Component({
    moduleId: module.id,
    selector: 'admin-noi-dung-edit',
    templateUrl: './admin-noi-dung-edit.component.html'
})
export class AdminNoiDungEditComponent implements OnInit, CloseGuard, ModalComponent<ModalContext> {
    private _noiDung: NoiDung;

    constructor(private noiDungService: NoiDungService,
        public dialog: DialogRef<ModalContext>) {
    }

    ngOnInit() {
        this.getNoiDungById(this.dialog.context.id);
    }

    private getNoiDungById(id) {
        this.noiDungService.getNoiDungByID(id)
            .then(result => {
                this._noiDung = result.data;
            });
    }

    private onEmitValue(value) {
        this.noiDungService.updateNoiDung(value)
            .then(result => console.log(`success ${result}`))
            .catch(error => console.error('error khi update', error))
            .then(() => this.onClose(false));
    }

    private onClose(isExit: boolean) {
        this.dialog.close({ exit: isExit });
    }
}