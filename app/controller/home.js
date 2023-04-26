'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async jspang() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async testGetGirl(){
    const ctx = this.ctx;
    let id = ctx.query.id;
    const res = await ctx.service.jschy.getGirl(id);
    ctx.body = res;
  }
}

module.exports = HomeController;
