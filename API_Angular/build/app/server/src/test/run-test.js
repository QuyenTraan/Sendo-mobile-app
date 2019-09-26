"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * created by hong duc 2/1/2017
 */
var alsatian_1 = require("alsatian");
var tapSpec = require("tap-spec");
var app = require("../server");
var winston = require("winston");
var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)()
    ]
});
var testSet = alsatian_1.TestSet.create();
var path = process.argv[2];
if (path) {
    testSet.addTestsFromFiles("dist/server/test/" + path);
}
else {
    testSet.addTestsFromFiles("dist/server/test/**/*.spec.js");
}
var testRunner = new alsatian_1.TestRunner();
testRunner.outputStream
    .pipe(tapSpec())
    .pipe(process.stdout);
// chay server de test
var server = app.app.listen(8082, 'localhost', function () {
    logger.info('server started');
});
testRunner.run(testSet).then(function (result) {
    // tat server sau khi hoan thanh test
    server.close(function () {
        logger.info('server closed');
    });
}).catch(function (error) {
    // tat server sau khi hoan thanh test
    server.close(function () {
        logger.info('server closed');
    });
    logger.error(error.message);
});
//# sourceMappingURL=run-test.js.map