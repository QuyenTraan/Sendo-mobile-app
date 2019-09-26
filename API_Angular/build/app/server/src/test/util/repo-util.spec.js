"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var alsatian_1 = require("alsatian");
var repo_util_1 = require("../../repositories/util/repo-util");
var TestUtilRepo = /** @class */ (function () {
    function TestUtilRepo() {
    }
    TestUtilRepo.prototype.testConvertQueryForOrderBy = function (standard, expectValue) {
        var result = repo_util_1.RepoUtil.convertQueryForOrderBy(standard);
        alsatian_1.Expect(result).toEqual(expectValue);
    };
    TestUtilRepo.prototype.testErrorConvertQueryForOrderBy = function (standard) {
        alsatian_1.Expect(function () {
            repo_util_1.RepoUtil.convertQueryForOrderBy(standard);
        }).toThrow();
    };
    TestUtilRepo.prototype.testErrorConvertQueryForOrderBy2 = function (standard) {
        alsatian_1.Expect(function () {
            repo_util_1.RepoUtil.convertQueryForOrderBy(standard);
        }).not.toThrow();
    };
    TestUtilRepo.prototype.testBuildWhereQuery = function (object, expectValue) {
        var result = repo_util_1.RepoUtil.buildWhereQuery(object);
        alsatian_1.Expect(result.query).toEqual(expectValue.query);
        alsatian_1.Expect(result.params).toEqual(expectValue.params);
    };
    TestUtilRepo.prototype.testErrorBuildWhereQuery = function (object) {
        alsatian_1.Expect(function () {
            repo_util_1.RepoUtil.buildWhereQuery(object);
        }).toThrow();
    };
    TestUtilRepo.prototype.testBuildSetQuery = function (object, array, expectValue) {
        var result = repo_util_1.RepoUtil.buildSetQuery(object, array);
        alsatian_1.Expect(result.query).toEqual(expectValue.query);
        alsatian_1.Expect(result.params).toEqual(expectValue.params);
    };
    TestUtilRepo.prototype.testErrorBuildSetQuery = function (object, array) {
        alsatian_1.Expect(function () {
            repo_util_1.RepoUtil.buildSetQuery(object, array);
        }).toThrow();
    };
    __decorate([
        alsatian_1.TestCase('noi_dung+1', 'ORDER BY noi_dung DESC'),
        alsatian_1.TestCase('noi_dung+1,tieu_de+0', 'ORDER BY noi_dung DESC,tieu_de ASC'),
        alsatian_1.Test('test convertQueryForOrderBy'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testConvertQueryForOrderBy", null);
    __decorate([
        alsatian_1.TestCase(''),
        alsatian_1.TestCase('noi_dung+3'),
        alsatian_1.TestCase('noi_dung+1noi_dung+1'),
        alsatian_1.TestCase('noidung+1,noi_dung+1,'),
        alsatian_1.Test('ConvertQueryForOrderBy must throw Error'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testErrorConvertQueryForOrderBy", null);
    __decorate([
        alsatian_1.TestCase('noidung+1,noi_dung+0'),
        alsatian_1.TestCase('noidung+1,noi_dung+0,tencot+0'),
        alsatian_1.Test('ConvertQueryForOrderBy must not throw Error'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testErrorConvertQueryForOrderBy2", null);
    __decorate([
        alsatian_1.TestCase({ array: [] }, { query: 'WHERE $1 && array', params: [[]] }),
        alsatian_1.TestCase({ noi_dung_id: 1, tieu_de: 'hong duc' }, { query: 'WHERE noi_dung_id = $1 and tieu_de like $2', params: [1, '%hong duc%'] }),
        alsatian_1.Test('test buildWhereQuery'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testBuildWhereQuery", null);
    __decorate([
        alsatian_1.TestCase({}),
        alsatian_1.Test('buildWhereQuery must throw Error'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testErrorBuildWhereQuery", null);
    __decorate([
        alsatian_1.TestCase({ noi_dung_id: 1, tieu_de: 'hong duc' }, [], { query: 'SET noi_dung_id = $1,tieu_de = $2', params: [1, 'hong duc'] }),
        alsatian_1.TestCase({ noi_dung_id: 1, tieu_de: 'hong duc' }, ['noi_dung_id'], { query: 'SET tieu_de = $1', params: ['hong duc'] }),
        alsatian_1.Test('test BuildSetQuery'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testBuildSetQuery", null);
    __decorate([
        alsatian_1.TestCase({}, []),
        alsatian_1.Test('buildSetQuery must throw Error'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], TestUtilRepo.prototype, "testErrorBuildSetQuery", null);
    return TestUtilRepo;
}());
exports.TestUtilRepo = TestUtilRepo;
//# sourceMappingURL=repo-util.spec.js.map