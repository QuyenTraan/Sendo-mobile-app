/**
 * created by hong duc 2/1/2017
 */
import { TestRunner, TestSet } from 'alsatian';
import tapSpec = require('tap-spec');
import app = require('../server');
import winston = require('winston');

let logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)()
    ]
});

const testSet = TestSet.create();
let path = process.argv[2];
if (path) {
    testSet.addTestsFromFiles(`dist/server/test/${path}`);
} else {
    testSet.addTestsFromFiles(`dist/server/test/**/*.spec.js`);
}


const testRunner = new TestRunner();

testRunner.outputStream
    .pipe(tapSpec())
    .pipe(process.stdout);

// chay server de test
let server = app.app.listen(8082, 'localhost', () => {
    logger.info('server started');
});

testRunner.run(testSet).then((result) => {
    // tat server sau khi hoan thanh test
    server.close(() => {
        logger.info('server closed');
    });
}).catch(error => {
    // tat server sau khi hoan thanh test
    server.close(() => {
        logger.info('server closed');
    });
    logger.error(error.message);
});