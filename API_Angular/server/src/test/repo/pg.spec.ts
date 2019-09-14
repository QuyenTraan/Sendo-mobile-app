import { AsyncTest, Expect, Test, Timeout, TestCase, IgnoreTest } from 'alsatian';
import { NoiDungRepository } from '../../repositories';
import { 
    


    
 } from '../../models';


export class TestPG {

    // @IgnoreTest()
    @Test()
    public run100query() {
        let repo = new NoiDungRepository();
        let noidung = new NoiDung();
        noidung.tieu_de = 'If in doubt, use bruce-force';
        noidung.tag_int = [1, 2, 3];
        noidung.tag_text = ['a', 'b', 'c'];
        noidung.user_create = 'duc';
        noidung.user_update = 'duc';

        noidung.value_boolean = true;
        noidung.value_decimal = 1.2;
        noidung.value_int = 1;
        noidung.value_time = new Date();
        for (let i = 0; i < 100; i++) {
            let date = this.randomDate(new Date(2016, 0, 1), new Date());
            noidung.value_time = date;
            repo.insert(noidung);
        }
    }

    private randomDate(start: Date, end: Date): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

}