import { ModelBase } from './base-model';
export class TinTuc extends ModelBase {
    user_id: number;
    username: string;
    password: string;
    email: string;
    noi_dung: any;
    tieu_de: any;
}

export class TinTucCurrentStatusEnum {
    static readonly ACTIVE = 'active';
    static readonly DELETE = 'delete';
    static readonly PENDING = 'pending';
    static get values() {
        return [this.ACTIVE, this.DELETE, this.PENDING];
    }
}