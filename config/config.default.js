/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1682233283086_1629';

  // add your middleware config here
  // config.middleware = [];

  //中间件的配置
  // config.middleware = ['counter'];

  // //有关数据库配置对象
  // config.mysql={
  //   app:true,
  //   agent:false,
  //   client:{
  //     host:'127.0.0.1',
  //     port:'3306',
  //     user:'root',
  //     password:'root'
  //   }
  // }

  // CSRF enable:false
  config.security = {
    csrf: {
      enable: false,
    },
    cors: {
      origin:'*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    },
  };

  //模板引擎配置项
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks' //左边写成.html后缀，会自动渲染.html文件
    },
  };
  //jwt配置项
  config.jwt = {
    secret: 'wuyueshitian',	//自定义token的加密条件字符串，可按各自的需求填写
  };

  //修改静态资源组件前缀
  // config.static={
  //   prefix:"/assets/"
  // }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //egg.js redis的配置项
  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: '',
      db: 1,
    },
  };


  return {
    ...config,
    ...userConfig,
  };
};
