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
var repositories_1 = require("../../repositories");
var models_1 = require("../../models");
var TestPG = /** @class */ (function () {
    function TestPG() {
    }
    // @IgnoreTest()
    TestPG.prototype.run100query = function () {
        var repo = new repositories_1.NoiDungRepository();
        var noidung = new models_1.NoiDung();
        noidung.tieu_de = 'If in doubt, use bruce-force';
        noidung.tag_int = [1, 2, 3];
        noidung.tag_text = ['a', 'b', 'c'];
        noidung.user_create = 'duc';
        noidung.user_update = 'duc';
        noidung.value_boolean = true;
        noidung.value_decimal = 1.2;
        noidung.value_int = 1;
        noidung.value_time = new Date();
        for (var i = 0; i < 100; i++) {
            var date = this.randomDate(new Date(2016, 0, 1), new Date());
            noidung.value_time = date;
            repo.insert(noidung);
        }
    };
    TestPG.prototype.randomDate = function (start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };
    __decorate([
        alsatian_1.Test(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TestPG.prototype, "run100query", null);
    return TestPG;
}());
exports.TestPG = TestPG;
//# sourceMappingURL=pg.spec.js.map