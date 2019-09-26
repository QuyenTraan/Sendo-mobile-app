import { Component } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'quan-ly-noi-dung-page',
    templateUrl: './quan-ly-noi-dung.page.html'
})
export class QuanLyNoiDungPage {
    admin_page: Array<{ routerLink: string, name: string }> = [
        { routerLink: 'admin-noi-dung-list', name: 'Admin Noi Dung List' }
    ];
}