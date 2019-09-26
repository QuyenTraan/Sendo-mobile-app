/**
 * created by hong duc 29/12/2016
 */

import express = require('express');
import jwt = require('jwt-simple');
import path = require('path');
let secretkey = require(path.join(__dirname, '..', 'config', 'json-config', 'secret-key.json'));

/**
 * controller quản lý chứng thực user
 */
export default class AuthController {

    login = (req: express.Request, res: express.Response) => {
        let username = req.body.username || '';
        let password = req.body.password || '';

        if (!username || !password) {
            res.status(401);
            res.json({
                status: 401,
                message: 'sai username hoặc password'
            });
            return;
        }

        let userObj = this.validate(username, password);

        if (!userObj) {
            res.status(401);
            res.json({
                status: 401,
                message: 'sai username hoặc password'
            });
            return;
        } else {
            res.json(this.genToken(userObj));
        }


    }

    private validate = (username: string, password: string) => {
        if (username === 'test' && password === 'test') {
            let userObj = {
                name: 'test',
                role: 'admin',
                username: username
            };
            return userObj;
        }
        return null;
    }

    validateUser = (username: string) => {

    }

    private genToken = (user) => {
        let expires = this.expiresIn(7); // 7 days
        let token = jwt.encode({
            exp: expires
        }, secretkey.key);
        return {
            token: token,
            expires: expires,
            user: user
        };
    }

    private expiresIn = (numDays: number) => {
        let date = new Date();
        return date.setDate(date.getDate() + numDays);
    }
}