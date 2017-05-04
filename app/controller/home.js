'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const page = this.ctx.params.page || 1;
      const jsonResult = yield this.ctx.service.jobs.queryJobList({
        p: page,
        lm: 10
      });
      const data = {
        name: 'home',
        list: jsonResult.data,
        info: jsonResult.filter
      };
      yield this.ctx.render('home/index', data);
    }

    * about() {
      const data = { name: 'about' };
      yield this.ctx.render('about/index', data);
    }
  }
  return HomeController;
};
