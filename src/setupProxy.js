const proxy = require('http-proxy-middleware');

const options = {
  target: 'https://api.github.com/',
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api': '' // remove base path
  },
};

module.exports = function(app) {
  app.use(proxy('/api', options));
};