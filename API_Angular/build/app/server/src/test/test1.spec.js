"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/**
 * created by hong duc 2/1/2017
 */
var alsatian_1 = require("alsatian");
var test_base_1 = require("./test.base");
var Test1 = /** @class */ (function (_super) {
    __extends(Test1, _super);
    function Test1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Test1.prototype.testGet = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.request.get('/user')
                .expect(200)
                .expect({ name: 'duc' })
                .end(function (err) {
                _this.handleEnd(rej, res, err);
            });
        });
    };
    Test1.prototype.testPost = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.request.post('/user')
                .set('Content-Type', 'application/json')
                .send({ name: 'duc' })
                .expect(200)
                .expect({ name: 'duc' })
                .end(function (err) {
                _this.handleEnd(rej, res, err);
            });
        });
    };
    Test1.prototype.testPostQuery = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            _this.request.post('/userName')
                .query({ name: 'duc' })
                .expect(200)
                .expect('duc')
                .end(function (err) {
                _this.handleEnd(rej, res, err);
            });
        });
    };
    __decorate([
        alsatian_1.AsyncTest('test get'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Test1.prototype, "testGet", null);
    __decorate([
        alsatian_1.AsyncTest('test post json'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Test1.prototype, "testPost", null);
    __decorate([
        alsatian_1.AsyncTest('test post query'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Test1.prototype, "testPostQuery", null);
    Test1 = __decorate([
        alsatian_1.TestFixture('test demo')
    ], Test1);
    return Test1;
}(test_base_1.TestBase));
exports.Test1 = Test1;
//# sourceMappingURL=test1.spec.js.map