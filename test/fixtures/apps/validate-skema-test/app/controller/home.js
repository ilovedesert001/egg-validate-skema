'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.validateSkema.name;
  }

  async topic() {
    this.ctx.validate({
      id: 'number?',
      name: String,
    });
    this.ctx.body = this.ctx.vparams;
  }

}

module.exports = HomeController;
