import { Test, TestCase, IgnoreTest, Expect } from 'alsatian';
import { RepoUtil } from '../../repositories/util/repo-util';

export class TestUtilRepo {

    @TestCase('noi_dung+1', 'ORDER BY noi_dung DESC')
    @TestCase('noi_dung+1,tieu_de+0', 'ORDER BY noi_dung DESC,tieu_de ASC')
    @Test('test convertQueryForOrderBy')
    public testConvertQueryForOrderBy(standard, expectValue) {
        let result = RepoUtil.convertQueryForOrderBy(standard);
        Expect(result).toEqual(expectValue);
    }

    @TestCase('')
    @TestCase('noi_dung+3')
    @TestCase('noi_dung+1noi_dung+1')
    @TestCase('noidung+1,noi_dung+1,')
    @Test('ConvertQueryForOrderBy must throw Error')
    public testErrorConvertQueryForOrderBy(standard) {
        Expect(() => {
            RepoUtil.convertQueryForOrderBy(standard);
        }).toThrow();
    }

    @TestCase('noidung+1,noi_dung+0')
    @TestCase('noidung+1,noi_dung+0,tencot+0')
    @Test('ConvertQueryForOrderBy must not throw Error')
    public testErrorConvertQueryForOrderBy2(standard) {
        Expect(() => {
            RepoUtil.convertQueryForOrderBy(standard);
        }).not.toThrow();
    }

    @TestCase({ array: [] }, { query: 'WHERE $1 && array', params: [[]] })
    @TestCase({ noi_dung_id: 1, tieu_de: 'hong duc' }, { query: 'WHERE noi_dung_id = $1 and tieu_de like $2', params: [1, '%hong duc%'] })
    @Test('test buildWhereQuery')
    public testBuildWhereQuery(object, expectValue) {
        let result = RepoUtil.buildWhereQuery(object);
        Expect(result.query).toEqual(expectValue.query);
        Expect(result.params).toEqual(expectValue.params);
    }

    @TestCase({})
    @Test('buildWhereQuery must throw Error')
    public testErrorBuildWhereQuery(object) {
        Expect(() => {
            RepoUtil.buildWhereQuery(object);
        }).toThrow();
    }

    @TestCase({ noi_dung_id: 1, tieu_de: 'hong duc' }, [], { query: 'SET noi_dung_id = $1,tieu_de = $2', params: [1, 'hong duc'] })
    @TestCase({ noi_dung_id: 1, tieu_de: 'hong duc' }, ['noi_dung_id'], { query: 'SET tieu_de = $1', params: ['hong duc'] })
    @Test('test BuildSetQuery')
    public testBuildSetQuery(object, array, expectValue) {
        let result = RepoUtil.buildSetQuery(object, array);
        Expect(result.query).toEqual(expectValue.query);
        Expect(result.params).toEqual(expectValue.params);
    }

    @TestCase({}, [])
    @Test('buildSetQuery must throw Error')
    public testErrorBuildSetQuery(object, array) {
        Expect(() => {
            RepoUtil.buildSetQuery(object, array);
        }).toThrow();
    }
}
