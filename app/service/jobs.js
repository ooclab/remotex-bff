/**
 *
 * @param app
 * @return {*}
 *
 * /jobx/job 获取job列表
 *
 */


module.exports = app => {
  class Jobs extends app.Service {
    * queryJobList(uid) {
      const apiHost = this.config.apiHost;
      const result = yield this.ctx.curl(`http://${apiHost}/api/jobx/job`, {
        dataType: 'json',
      });
      return result;
    }
  }
  return Jobs;
};
