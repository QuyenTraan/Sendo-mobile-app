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
Object.defineProperty(exports, "__esModule", { value: true });
var base_model_1 = require("./base-model");
var TinTuc = /** @class */ (function (_super) {
    __extends(TinTuc, _super);
    function TinTuc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TinTuc;
}(base_model_1.ModelBase));
exports.TinTuc = TinTuc;
var TinTucCurrentStatusEnum = /** @class */ (function () {
    function TinTucCurrentStatusEnum() {
    }
    Object.defineProperty(TinTucCurrentStatusEnum, "values", {
        get: function () {
            return [this.ACTIVE, this.DELETE, this.PENDING];
        },
        enumerable: true,
        configurable: true
    });
    TinTucCurrentStatusEnum.ACTIVE = 'active';
    TinTucCurrentStatusEnum.DELETE = 'delete';
    TinTucCurrentStatusEnum.PENDING = 'pending';
    return TinTucCurrentStatusEnum;
}());
exports.TinTucCurrentStatusEnum = TinTucCurrentStatusEnum;
//# sourceMappingURL=tintuc-model.js.map