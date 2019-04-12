const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api",
    proxy({
      target: "http://sample.bmaster.kro.kr",
      changeOrigin: true
    })
  );
};
