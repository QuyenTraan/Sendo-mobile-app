import { Setup, Teardown } from 'alsatian';
import supertest = require('supertest');

/**
 * là lớp cơ sở, chạy những việc mà mọi lớp test cần
 * 
 */
export abstract class TestBase {
  request: supertest.SuperTest<supertest.Test> = supertest('http://localhost:8082');

  public handleEnd(rej, res, err) {
    if (err) {
      rej(err);
    } else {
      res();
    }
  }
}
