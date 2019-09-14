import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    ngOnInit() {
        console.log('dashboard init');
    }
}