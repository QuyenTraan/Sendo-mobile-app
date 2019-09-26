import { Component, OnInit, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { default as swal } from 'sweetalert2';
import { overlayConfigFactory, Overlay } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { Alert } from '../../../../util/alert';

import { ManageStateService } from '../../../../shared/manage-state.service';
import { NoiDungService } from '../../shared/noidung.service';

import * as _ from 'lodash';

import { OrderbyComponent } from '../../shared/order-by/order-by.component';
import { SearchComponent } from '../../shared/search/search.component';
import { StatusComponent } from '../../shared/status/status.component';
import { PagingComponent } from '../../../../shared/paging/paging.component';
import { LoaderComponent } from '../../../../shared/loader/loader.component';
import { IAddOnComponent } from '../../../../shared/add-on.interface';

import { AdminNoiDungCreateComponent } from "../admin-noi-dung-detail/admin-noi-dung-create/AdminNoiDungCreateComponent";
import { AdminNoiDungEditComponent } from '../admin-noi-dung-detail/admin-noi-dung-edit/admin-noi-dung-edit.component';

import { NoiDung } from '../../shared/noidung.model';


@Component({
    moduleId: module.id,
    selector: 'noi-dung-list',
    templateUrl: './admin-noi-dung-list.component.html',
    styleUrls: ['./admin-noi-dung-list.component.css']
})
export class AdminNoiDungListComponent implements OnInit {
    private _data: Promise<Array<NoiDung>>;
    private _total: number = 0;
    private _checkedListID: Array<any> = [];
    private _itemsPerPage: number;
    private _currentPage: number;
    private _keyValue = 'noi-dung-component';
    private _isLoaded = false;

    @ViewChild(StatusComponent) private _statusComponent: StatusComponent;
    @ViewChild(PagingComponent) private _pagingComponent: PagingComponent;
    @ViewChild(SearchComponent) private _searchComponent: SearchComponent;
    @ViewChild(OrderbyComponent) private _orderComponent: OrderbyComponent;
    @ViewChild(AdminNoiDungListComponent) private _noiDungListComponent: AdminNoiDungListComponent;
    private _addOnComponents: Array<IAddOnComponent> = [];

    constructor(
        private noiDungService: NoiDungService,
        private manageStateService: ManageStateService,
        private modal: Modal,
        private overlay: Overlay,
        private vcRef: ViewContainerRef,
        private router: Router) {
        overlay.defaultViewContainer = vcRef;
    }

    ngOnInit() {
        this._addOnComponents = [
            this._statusComponent,
            this._pagingComponent,
            this._searchComponent,
            this._orderComponent
        ];
        // bỏ comment để test loading
        // setTimeout(() => {
        //     this._data = this.getData().then((result) => {
        //         this._isLoaded = true;
        //         return result;
        //     });
        // }, 3000);
        this.loadState();

        this._data = this.getData().then(result => {
            this._isLoaded = true;
            this._total = result.length;
            return result.data;
        });
    }

    private openCreateModal() {
        this.modal.open(AdminNoiDungCreateComponent, overlayConfigFactory({}, BSModalContext))
            .then(value => {
                return value.result;
            })
            .then(result => {
                if (!result.exit) {
                    this.stateChange();
                }
            })
            .catch(error => console.log(error))
    }

    private openCreate() {
        this.router.navigate(['admin/quan-ly-noi-dung/admin-tao-moi-noi-dung']);
    }

    private openEditModal(id) {
        this.modal.open(AdminNoiDungEditComponent, overlayConfigFactory({ id: id }, BSModalContext))
            .then(value => value.result)
            .then(result => {
                if (!result.exit) {
                    this.stateChange();
                }
            })
            .catch(error => console.log(error))
    }

    private openEdit(id) {
        this.router.navigate(['admin/quan-ly-noi-dung/admin-sua-noi-dung', id]);
    }

    private deleteByChecked() {
        Alert.showDeleteAlertWithCancel(
            'Có chắc muốn xóa dữ liệu không?',
            'Dữ liệu sẽ bị xóa vĩnh viễn không thể quay lại')
            .then(() => {
                let listId = this._checkedListID;
                if (listId.length !== 0) {
                    this.noiDungService.deleteNoiDung(listId)
                        .then(() => {
                            this.stateChange();
                            this._checkedListID = [];
                            swal('Đã xóa', 'Dữ liệu được chọn đã xóa', 'success');
                        })
                } else {
                    swal('Bạn chưa chọn gì cả', 'Không có dữ liệu nào bị xóa', 'info');
                }
            });
    }

    private checkBoxChecked(checked: boolean, noidung: NoiDung) {
        if (checked) {
            this._checkedListID.push(noidung.noi_dung_id);
        } else {
            let index = this._checkedListID.indexOf(noidung.noi_dung_id);
            if (index !== -1) {
                this._checkedListID.splice(index, 1);
            }
        }
    }

    private identify(index, item) {
        return item.noi_dung_id;
    }

    private deleteByFilter() {
        Alert.showDeleteAlertWithCancel(
            'Có chắc muốn xóa dữ liệu không?',
            'Dữ liệu sẽ bị xóa vĩnh viễn không thể quay lại')
            .then(() => {
                if (this.isFiltering()) {
                    this.deleteRoutine(this._data)
                        .catch((err) => {
                            console.log(err);
                            console.log('done');
                            this.stateChange();
                            swal('Đã xóa', 'Dữ liệu được chọn đã xóa', 'success');
                        });
                } else {
                    swal('Bạn chưa chọn gì cả', 'Không có dữ liệu nào bị xóa', 'info');
                }
            })
    }

    private isFiltering(): boolean {
        for (let i = 0; i < this._addOnComponents.length; i++) {
            if (!_.isEmpty(this._addOnComponents[i].getState().value)) {
                console.log(this._addOnComponents[i].getState().value);
                return true;
            }
        }
        return false;
    }

    private deleteRoutine(promise: Promise<Array<NoiDung>>): Promise<any> {
        return promise.then(result => {
            if (result.length > 0) {
                console.log('run delete: ' + this._currentPage);
                let ids = result.map(rs => rs.noi_dung_id);
                return this.noiDungService.deleteNoiDung(ids);
            }
            return Promise.reject('no more');
        }).then(() => {
            this._pagingComponent.page = this._currentPage + 1;
            return this.deleteRoutine(this.getData().then(result => result.data));
        });
    }

    private getData(): Promise<any> {
        let body: any = {};
        this._addOnComponents.forEach(ac => {
            let state = ac.getState();
            if (state.value && state.name !== 'page') {
                body[state.name] = state.value;
            }
            if (state.name === 'page' && state.value) {
                this._currentPage = state.value;
                this.saveState();
            }
        });

        return this.noiDungService.searchNoiDung(body, this._currentPage, this._itemsPerPage);

    }

    private updatePerPage() {
        this.saveState();
        this.stateChange();
    }

    private saveState() {
        this.manageStateService.save(this._keyValue + ':perPage', this._itemsPerPage);
        this.manageStateService.save(this._keyValue + ':currentPage', this._currentPage);
    }

    private loadState() {
        this._itemsPerPage = this.manageStateService.load(this._keyValue + ':perPage') || 10;
        this._currentPage = this.manageStateService.load(this._keyValue + ':currentPage') || 1;
    }

    private stateChange() {
        this._data = this.getData().then(result => {
            this._total = result.length;
            return result.data;
        });
    }
}