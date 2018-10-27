'use strict';

const mock = require('egg-mock');

describe('test/validate-skema.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/validate-skema-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, validateSkema')
      .expect(200);
  });

  it('should all pass', () => {
    return app.httpRequest()
      .post('/topic')
      .send({
        id: '123',
        name: 'name',
      })
      .expect({
        id: 123,
        name: 'name',
      })
      .expect(200);
  });


  it('threw error', () => {
    return app.httpRequest()
      .post('/topic')
      .send({
        id: 'aaa',
      })
      .expect(422);

  });


});
