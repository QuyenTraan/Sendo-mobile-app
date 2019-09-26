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
var noidung_repository_1 = require("../../repositories/noidung-repository");
var noidung_model_1 = require("../../models/noidung-model");
var noidung_test_data_1 = require("./noidung-test-data");
var NoiDungRepoSpec = /** @class */ (function () {
    function NoiDungRepoSpec() {
        this.noiDungRepo = new noidung_repository_1.NoiDungRepository();
    }
    NoiDungRepoSpec.prototype.testSearchQuery = function (option, expectValue, orderby, limit, offset) {
        return this.noiDungRepo.search(option, orderby, limit, offset)
            .then(function (result) {
            alsatian_1.Expect(result).toEqual(expectValue);
        });
    };
    NoiDungRepoSpec.prototype.testDelete = function () {
        return this.noiDungRepo.delete([187, 189])
            .then(function (result) {
            alsatian_1.Expect(result).toEqual(2);
        })
            .catch(function (error) {
            console.log(JSON.stringify(error));
            return Promise.reject(error);
        });
    };
    NoiDungRepoSpec.prototype.testUpdate = function () {
        return this.noiDungRepo.update({ noi_dung_id: 191, value_int: 100 })
            .then(function (result) {
            alsatian_1.Expect(result).toEqual(1);
        })
            .catch(function (error) {
            console.log(JSON.stringify(error));
            return Promise.reject(error);
        });
    };
    NoiDungRepoSpec.prototype.testInsert = function () {
        var noidung = new noidung_model_1.NoiDung();
        noidung.noi_dung_id = 1;
        noidung.value_int = 500;
        return this.noiDungRepo.insert(noidung)
            .then(function (result) {
            alsatian_1.Expect(result).toEqual(1);
        })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    NoiDungRepoSpec.prototype.testQuaTrinhCRUD = function (id) {
        var _this = this;
        var noidung = new noidung_model_1.NoiDung();
        noidung.value_int = 500;
        noidung.tag_int = [1, 2, 3];
        noidung.tag_text = ['a', 'b', 'c'];
        noidung.tieu_de = 'hong duc';
        noidung.value_boolean = true;
        noidung.value_decimal = 1.2;
        // noidung.value_time = '1-20-2017';
        return this.noiDungRepo.insert(noidung)
            .then(function (rowCount) {
            alsatian_1.Expect(rowCount).toEqual(1);
            return _this.noiDungRepo.update({ noi_dung_id: id, value_time: '1-29-2017' });
        })
            .then(function (rowCount) {
            alsatian_1.Expect(rowCount).toEqual(1);
            return _this.noiDungRepo.getOne(id);
        })
            .then(function (result) {
            // Expect(result.noi_dung_id).toEqual(id);
            // return this.noiDungRepo.delete([id]);
        })
            .then(function (rowCount) {
            alsatian_1.Expect(rowCount).toEqual(1);
        })
            .catch(function (error) {
            console.log(error);
            return Promise.reject(error);
        });
    };
    __decorate([
        alsatian_1.TestCase({ noi_dung_id: 191 }, [noidung_test_data_1.data], 'noi_dung_id+1', 10, 0),
        alsatian_1.TestCase({ noi_dung_id: 191 }, [noidung_test_data_1.data]),
        alsatian_1.AsyncTest('test search function'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], NoiDungRepoSpec.prototype, "testSearchQuery", null);
    __decorate([
        alsatian_1.IgnoreTest(),
        alsatian_1.AsyncTest('test delete function'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NoiDungRepoSpec.prototype, "testDelete", null);
    __decorate([
        alsatian_1.IgnoreTest(),
        alsatian_1.AsyncTest('test update'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NoiDungRepoSpec.prototype, "testUpdate", null);
    __decorate([
        alsatian_1.IgnoreTest(),
        alsatian_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], NoiDungRepoSpec.prototype, "testInsert", null);
    __decorate([
        alsatian_1.IgnoreTest(),
        alsatian_1.TestCase(201),
        alsatian_1.AsyncTest(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], NoiDungRepoSpec.prototype, "testQuaTrinhCRUD", null);
    return NoiDungRepoSpec;
}());
exports.NoiDungRepoSpec = NoiDungRepoSpec;
//# sourceMappingURL=noidung-repo.spec.js.map