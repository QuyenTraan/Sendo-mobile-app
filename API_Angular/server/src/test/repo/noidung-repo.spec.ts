import { Test, TestCase, Expect, IgnoreTest, AsyncTest } from 'alsatian';
import { NoiDungRepository } from '../../repositories/noidung-repository';
import * as noidungModel from '../../models/noidung-model';
import { data } from './noidung-test-data';

export class NoiDungRepoSpec {

    noiDungRepo: NoiDungRepository = new NoiDungRepository();

    @TestCase({ noi_dung_id: 191 }, [data], 'noi_dung_id+1', 10, 0)
    @TestCase({ noi_dung_id: 191 }, [data])
    @AsyncTest('test search function')
    public testSearchQuery(option, expectValue, orderby?, limit?, offset?) {
        return this.noiDungRepo.search(option, orderby, limit, offset)
            .then(result => {
                Expect(result).toEqual(expectValue);
            });
    }

    @IgnoreTest()
    @AsyncTest('test delete function')
    public testDelete() {
        return this.noiDungRepo.delete([187, 189])
            .then(result => {
                Expect(result).toEqual(2);
            })
            .catch(error => {
                console.log(JSON.stringify(error));
                return Promise.reject(error);
            })
    }

    @IgnoreTest()
    @AsyncTest('test update')
    public testUpdate() {
        return this.noiDungRepo.update({ noi_dung_id: 191, value_int: 100 })
            .then(result => {
                Expect(result).toEqual(1);
            })
            .catch(error => {
                console.log(JSON.stringify(error));
                return Promise.reject(error);
            })
    }

    @IgnoreTest()
    @AsyncTest()
    public testInsert() {
        let noidung = new noidungModel.NoiDung();
        noidung.noi_dung_id = 1;
        noidung.value_int = 500;
        return this.noiDungRepo.insert(noidung)
            .then(result => {
                Expect(result).toEqual(1);
            })
            .catch(error => {
                console.log(error);
                return Promise.reject(error);
            })
    }

    @IgnoreTest()
    @TestCase(201)
    @AsyncTest()
    public testQuaTrinhCRUD(id: number) {
        let noidung = new noidungModel.NoiDung();
        noidung.value_int = 500;
        noidung.tag_int = [1, 2, 3];
        noidung.tag_text = ['a', 'b', 'c'];
        noidung.tieu_de = 'hong duc';
        noidung.value_boolean = true;
        noidung.value_decimal = 1.2;
        // noidung.value_time = '1-20-2017';
        return this.noiDungRepo.insert(noidung)
            .then(rowCount => {
                Expect(rowCount).toEqual(1);
                return this.noiDungRepo.update({ noi_dung_id: id, value_time: '1-29-2017' });
            })
            .then(rowCount => {
                Expect(rowCount).toEqual(1);
                return this.noiDungRepo.getOne(id);
            })
            .then(result => {
                // Expect(result.noi_dung_id).toEqual(id);
                // return this.noiDungRepo.delete([id]);
            })
            .then(rowCount => {
                Expect(rowCount).toEqual(1);
            })
            .catch(error => {
                console.log(error);
                return Promise.reject(error);
            })
    }
}