"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jwt-simple");
var fs = require("fs");
var controllers_1 = require("../controllers");
var path = require("path");
/**
 * middleware dùng để chứng thực request
 */
var AuthValidator = /** @class */ (function () {
    function AuthValidator() {
        this.validate = function (req, res, next) {
            var token = req.headers['x-access-token'];
            var key = req.headers['x-key'];
            var secretkey = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', 'json-config', 'secret-key.json'), 'utf8'));
            if (token || key) {
                try {
                    var decoded = jwt.decode(token, secretkey.key);
                    if (decoded.exp <= Date.now()) {
                        res.status(400);
                        res.json({
                            status: 400,
                            message: "Token expired"
                        });
                        return;
                    }
                    next();
                }
                catch (error) {
                    res.status(500);
                    res.json({
                        status: 500,
                        message: "Có lỗi xảy ra, xin quay lại sau",
                        err: error
                    });
                }
            }
            else {
                res.status(401);
                res.json({
                    "status": 401,
                    "message": "Invalid Token or Key"
                });
                return;
            }
        };
        this._authController = new controllers_1.AuthController();
    }
    return AuthValidator;
}());
exports.default = AuthValidator;
//# sourceMappingURL=auth-validator.js.map