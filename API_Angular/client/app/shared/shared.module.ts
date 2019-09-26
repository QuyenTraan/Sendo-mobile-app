import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Ng2PaginationModule } from 'ng2-pagination';
import { NgSpinKitModule } from 'ng-spin-kit';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { Select2Module } from 'ng2-select2';



import { LoaderComponent } from './loader/loader.component';
import { PagingComponent } from './paging/paging.component';
import { Select2InputComponent } from './select2-input.component';

@NgModule({
    imports: [
        CommonModule,
        Ng2PaginationModule,
        NgSpinKitModule,
        ModalModule.forRoot(),
        BootstrapModalModule,
        Select2Module
    ],
    declarations: [LoaderComponent, PagingComponent, Select2InputComponent],
    exports: [
        LoaderComponent,
        PagingComponent,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        Ng2PaginationModule,
        Select2InputComponent
    ]
})
export class SharedModule {

}