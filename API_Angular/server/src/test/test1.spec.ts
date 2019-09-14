/**
 * created by hong duc 2/1/2017
 */
import { AsyncTest, Test, Expect, TestFixture } from 'alsatian';
import { TestBase } from './test.base';

@TestFixture('test demo')
export class Test1 extends TestBase {

    @AsyncTest('test get')
    public testGet() {
        return new Promise((res, rej) => {
            this.request.get('/user')
                .expect(200)
                .expect({ name: 'duc' })
                .end(err => {
                    this.handleEnd(rej, res, err);
                });
        });
    }

    @AsyncTest('test post json')
    public testPost() {
        return new Promise((res, rej) => {
            this.request.post('/user')
                .set('Content-Type', 'application/json')
                .send({ name: 'duc' })
                .expect(200)
                .expect({ name: 'duc' })
                .end(err => {
                    this.handleEnd(rej, res, err);
                });
        });
    }

    @AsyncTest('test post query')
    public testPostQuery() {
        return new Promise((res, rej) => {
            this.request.post('/userName')
                .query({ name: 'duc' })
                .expect(200)
                .expect('duc')
                .end(err => {
                    this.handleEnd(rej, res, err);
                });
        });
    }


}
