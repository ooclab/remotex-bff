// this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
/**
 method {String} - Request method, defaults to GET. Could be GET, POST, DELETE or PUT. Alias 'type'.
 data {Object} - Data to be sent. Will be stringify automatically.
 dataType {String} - String - Type of response data. Could be text or json. If it's text, the callbacked data would be a String. If it's json, the data of callback would be a parsed JSON Object. Default callbacked data would be a Buffer.
 headers {Object} - Request headers.
 timeout {Number} - Request timeout in milliseconds. Defaults to exports.TIMEOUT. Include remote server connecting timeout and response timeout. When timeout happen, will return ConnectionTimeout or ResponseTimeout.
 auth {String} - username:password used in HTTP Basic Authorization.
 followRedirect {Boolean} - follow HTTP 3xx responses as redirects. defaults to false.
 gzip {Boolean} - let you get the res object when request connected, default false. alias customResponse
 */
const querystring = require('querystring');
// const url = require('url');

module.exports = {
  * fetch(api, options = {}) {
    const apiHost = this.app.config.apiHost;
    let { query } = options;
    query = querystring.stringify(query);
    const url = `${apiHost}/api${api}?${query}`;

    const result = yield this.curl(url, Object.assign({
      dataType: 'json',
      timeout: 10000, // 默认超时时间
    }, options));

    const { data } = result;

    return data;
  },
};
