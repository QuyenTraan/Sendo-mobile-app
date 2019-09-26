import { NgModule } from '@angular/core';

//shared module
import { SharedModule } from '../../shared/shared.module';

// third party module
import { Select2Module } from 'ng2-select2';
import { Ng2Webstorage } from 'ng2-webstorage';
import { QuillModule } from 'ngx-quill';

import { NoiDungService } from './shared/noidung.service';


import { AdminNoiDungListComponent } from './admin/admin-noi-dung-list/admin-noi-dung-list.component';
import { AdminNoiDungFormComponent } from './admin/admin-noi-dung-detail/admin-noi-dung-form/admin-noi-dung-form.component';
import { AdminNoiDungEditComponent } from './admin/admin-noi-dung-detail/admin-noi-dung-edit/admin-noi-dung-edit.component';
import { AdminNoiDungCreateComponent } from "./admin/admin-noi-dung-detail/admin-noi-dung-create/AdminNoiDungCreateComponent";
import { ClientNoiDungDetail } from './client/client-noi-dung-detail/client-noi-dung-detail.component';
import { DashboardNoiDungMoi } from './admin/dashboard-noi-dung-moi/dashboard-noi-dung-moi.component';
import { OrderbyComponent } from './shared/order-by/order-by.component';
import { SearchComponent } from './shared/search/search.component';
import { StatusComponent } from './shared/status/status.component';


@NgModule({
    imports: [
        Select2Module,
        Ng2Webstorage,
        SharedModule,
        QuillModule
    ],
    declarations: [
        AdminNoiDungListComponent,
        AdminNoiDungFormComponent,
        ClientNoiDungDetail,
        OrderbyComponent,
        SearchComponent,
        StatusComponent,
        DashboardNoiDungMoi,
        AdminNoiDungEditComponent,
        AdminNoiDungCreateComponent
    ],
    providers: [NoiDungService],
    exports: [
        AdminNoiDungListComponent,
        AdminNoiDungFormComponent,
        ClientNoiDungDetail,
        OrderbyComponent,
        SearchComponent,
        StatusComponent,
        DashboardNoiDungMoi,
        AdminNoiDungEditComponent,
        AdminNoiDungCreateComponent
    ],
    entryComponents: [AdminNoiDungCreateComponent, AdminNoiDungEditComponent]
})
export class NoiDungModule {
}