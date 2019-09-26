"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var tintuc_router_1 = require("./tintuc-router");
var monan_router_1 = require("./monan-router");
var app = express();
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            app.use('/tin-tuc', new tintuc_router_1.default().routes);
            app.use('/mon-an', new monan_router_1.default().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
exports.default = Routes;
//# sourceMappingURL=routes.js.map