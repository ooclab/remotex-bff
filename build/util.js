const os = require('os');

function getIp() {
  let host = null;
  try {
    host = os.networkInterfaces().en0.find(ip => ip.family === 'IPv4').address;
  } catch (e) {
    host = '127.0.0.1';
  }

  return host;
}

module.exports = {
  ip: getIp(),
};
