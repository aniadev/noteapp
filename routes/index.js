const siteRoute = require("./site");
const authRoute = require("./auth");
const meRoute = require("./me");

const TEST = require("../app/middlewares/TEST"); //  middleware application
const ErrorHandler = require("../app/middlewares/ErrorHandler"); //error handler middleware
const cookieParser = require("cookie-parser");
route = (app) => {
  app.use(ErrorHandler);
  app.use("/", TEST);
  app.use(cookieParser());
  //use routes
  app.use("/auth", authRoute);
  app.use("/me", meRoute);
  app.use("/", siteRoute);
};

module.exports = route;
