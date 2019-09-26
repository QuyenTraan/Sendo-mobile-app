"use strict";
/**
 * created by hong duc 29/12/2016
 */
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jwt-simple");
var path = require("path");
var secretkey = require(path.join(__dirname, '..', 'config', 'json-config', 'secret-key.json'));
/**
 * controller quản lý chứng thực user
 */
var AuthController = /** @class */ (function () {
    function AuthController() {
        var _this = this;
        this.login = function (req, res) {
            var username = req.body.username || '';
            var password = req.body.password || '';
            if (!username || !password) {
                res.status(401);
                res.json({
                    status: 401,
                    message: 'sai username hoặc password'
                });
                return;
            }
            var userObj = _this.validate(username, password);
            if (!userObj) {
                res.status(401);
                res.json({
                    status: 401,
                    message: 'sai username hoặc password'
                });
                return;
            }
            else {
                res.json(_this.genToken(userObj));
            }
        };
        this.validate = function (username, password) {
            if (username === 'test' && password === 'test') {
                var userObj = {
                    name: 'test',
                    role: 'admin',
                    username: username
                };
                return userObj;
            }
            return null;
        };
        this.validateUser = function (username) {
        };
        this.genToken = function (user) {
            var expires = _this.expiresIn(7); // 7 days
            var token = jwt.encode({
                exp: expires
            }, secretkey.key);
            return {
                token: token,
                expires: expires,
                user: user
            };
        };
        this.expiresIn = function (numDays) {
            var date = new Date();
            return date.setDate(date.getDate() + numDays);
        };
    }
    return AuthController;
}());
exports.default = AuthController;
//# sourceMappingURL=auth-controller.js.map