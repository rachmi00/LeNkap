const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(App) {
  App.use(
    '/api',
    createProxyMiddleware({
      target: 'https://le-nkap-v1.onrender.com/users',
      changeOrigin: true,
    })
  );
};
