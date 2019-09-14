import * as express from 'express';
import { ModelBase } from '../models/base-model';
import { LogUtil } from '../util/log-util';

export default class ControllerUtil {
    /**
     * @author đức 26/1/2017
     * 
     * hàm gộp tất cả những hành giống nhau lại
     */
    public static resovleResponse(res: express.Response, promise: Promise<any>): void {
        promise
            .then(result => {
                let status = result.status;
                delete result.status;
                if (status && status >= 400) {
                    res.status(status).json(result);
                    return;
                }
                res.status(status || 200).json(result);
            })
            .catch(error => {
                LogUtil.error('error khi request:', error);
                res.status(500).json(error);
            });
    }
}