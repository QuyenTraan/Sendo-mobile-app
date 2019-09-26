/**
 * created by hong duc 30/12/2016
 */

import winston = require('winston');

export class LogUtil {
    private static logger = new (winston.Logger)({
        transports: [
            new (winston.transports.Console)(),
        ]
    });

    public static error(message: string, ...params) {
        winston.error(message, { error: params });
    }
}