import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { NoiDungService } from '../../../../components/noi-dung/shared/noidung.service';

@Component({
    moduleId: module.id,
    selector: 'them-noi-dung-page',
    templateUrl: './them-noi-dung.page.html',
    styleUrls: ['./them-noi-dung.page.css']
})
export class ThemNoiDungPage {

    constructor(private router: Router, private service: NoiDungService) { }

    private onEmitValue(value) {
        this.service.createNoiDung(value)
            .then(result => console.log(`success ${result}`))
            .catch(error => console.error('Error Khi Create Noi Dung', error))
            .then(() => this.onClose());
    }

    private onClose() {
        this.router.navigate(['/admin/quan-ly-noi-dung']);
    }
}