import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NoiDungService } from '../../../../components/noi-dung/shared/noidung.service';
import { NoiDung } from '../../../../components/noi-dung/shared/noidung.model';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/first';

@Component({
    moduleId: module.id,
    selector: 'sua-noi-dung-page',
    templateUrl: './sua-noi-dung.page.html',
    styleUrls: ['./sua-noi-dung.page.css']
})
export class SuaNoiDungPage implements OnInit {
    private _noiDung: NoiDung;
    constructor(private route: ActivatedRoute, private router: Router, private service: NoiDungService) { }

    ngOnInit() {
        this.route.params.first().toPromise()
            .then((params: Params) => this.service.getNoiDungByID(params['id']))
            .then(result => this._noiDung = result.data)
            .catch(error => console.error('Error khi get noi dung', error));
    }


    private onEmitValue(value) {
        this.service.updateNoiDung(value)
            .then(result => console.log(`success ${result}`))
            .catch(error => console.error('error khi update', error))
            .then(() => this.onClose());
    }

    private onClose() {
        this.router.navigate(['/admin/quan-ly-noi-dung']);
    }
}