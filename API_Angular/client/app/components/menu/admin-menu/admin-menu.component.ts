import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'admin-menu',
    templateUrl: './admin-menu.component.html'
})
export class AdminMenuComponent implements OnInit {
    admin_page: Array<{ routerLink: string, name: string }> = [
        { routerLink: 'admin-noi-dung/admin-noi-dung-list', name: 'Admin Noi Dung List' },
        { routerLink: 'admin-noi-dung/admin-noi-dung-edit', name: 'Admin Noi Dung Edit' },
        { routerLink: 'admin-hero/admin-hero-detail', name: 'Admin Hero Detail' },
        { routerLink: 'admin-hero/admin-hero-list', name: 'Admin Hero List' }
    ];

    constructor() { }

    ngOnInit() {

    }
}