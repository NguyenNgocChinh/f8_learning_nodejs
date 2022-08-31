const homeRouter = require("./site");

function route(app) {
  app.get("/", homeRouter);
}

module.exports = route;
