import express = require('express');
import { TinTucSchema } from './tintuc-schema';

/**
 * Middleware dùng cho validate toàn bộ TinTuc api
 */
export default class TinTucValidator {
    private _schema = new TinTucSchema();
    validate = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        req.check(this._schema.schema);
        req.getValidationResult().then(result => {
            if (result.isEmpty()) {
                next();
            } else {
                res.status(400).json(result.array());
            }
        });

    }
}