import { ModelBase } from './base-model';
export class MonAn extends ModelBase {
    mon_an_id: number;
    ten_mon_an: string;
    ten_mon_an_khong_dau: string;
    hinh_mon_an: string;
    nguyen_lieu: any;
    thuc_hien: any;
}

export class ThucPham extends ModelBase {
    mon_an_id: number;
    ten_mon_an: string;
    noi_dung: string;
}