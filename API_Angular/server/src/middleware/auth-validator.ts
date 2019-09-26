import jwt = require('jwt-simple');
import express = require('express');
import fs = require('fs');
import { AuthController } from '../controllers';
import path = require('path');

/**
 * middleware dùng để chứng thực request
 */
export default class AuthValidator {

    private _authController: AuthController;

    constructor() {
        this._authController = new AuthController();
    }


    validate = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        let token = req.headers['x-access-token'];
        let key = req.headers['x-key'];
        let secretkey = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'config', 'json-config', 'secret-key.json'), 'utf8'));

        if (token || key) {
            try {
                let decoded = jwt.decode(token , secretkey.key);
                if (decoded.exp <= Date.now()) {
                    res.status(400);
                    res.json({
                        status: 400,
                        message: "Token expired"
                    });
                    return;
                }
                next();
            } catch (error) {
                res.status(500);
                res.json({
                    status: 500,
                    message: "Có lỗi xảy ra, xin quay lại sau",
                    err: error
                });
            }
        } else {
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid Token or Key"
            });
            return;
        }
    }
}