"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var supertest = require("supertest");
/**
 * là lớp cơ sở, chạy những việc mà mọi lớp test cần
 *
 */
var TestBase = /** @class */ (function () {
    function TestBase() {
        this.request = supertest('http://localhost:8082');
    }
    TestBase.prototype.handleEnd = function (rej, res, err) {
        if (err) {
            rej(err);
        }
        else {
            res();
        }
    };
    return TestBase;
}());
exports.TestBase = TestBase;
//# sourceMappingURL=test.base.js.map