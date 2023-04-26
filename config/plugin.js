'use strict';
exports.ejs = {
  enable:true,
  package:"egg-view-ejs"
}
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

exports.mysql={
  enable:true,
  package:"egg-mysql"
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

//跨域问题
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
//数据库存储数据
exports.redis = {
    enable: true,
    package: 'egg-redis',
};