'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,jwt} = app;
  router.get('/', controller.home.index);	//普通的路由
  router.post('/login', controller.user.login);  //登录并生成Token
  router.post('/httpclient/sendCard',jwt,controller.httpClient.sendCard); //发送卡片的请求
};
