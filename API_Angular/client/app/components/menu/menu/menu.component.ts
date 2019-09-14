import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
    admin_page: Array<{ routerLink: string, name: string }> = [
        { routerLink: '/noi-dung/noi-dung-detail', name: 'Noi dung detail' },
        { routerLink: '/hero/hero-detail', name: 'Hero detail' }
    ];

    constructor() { }

    ngOnInit() {

    }
}