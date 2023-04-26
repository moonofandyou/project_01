'use strict';
const { app } = require('egg-mock/bootstrap');

describe('jschy -index', () => {
  it('jschy index page', () => {
    return app.httpRequest()
      .get('/my')
      .expect(200)
      .expect('<h1>hi, egg</h1>');
  });

  it('jschy getGirls page', async () => {
    return app.httpRequest()
      .get('/getGirls')
      .expect(200)
      .expect('<h1>wu yue is coming</h1>');
  });
});
