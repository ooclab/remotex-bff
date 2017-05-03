'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const jsonResult = yield this.ctx.service.jobs.queryJobList();
      console.log(jsonResult)
      const data = { name: 'egg' };
      yield this.ctx.render('home/index', data);
    }

    * about() {
      const data = { name: 'about' };
      yield this.ctx.render('about/index', data);
    }
  }
  return HomeController;
};
