const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api/v1/accepted/success', 'api/v1/accepted/failed'],
    createProxyMiddleware({
      target: 'http://localhost:8000',
    })
  );
};