const express = require('express');
var app = express();
const usersRoutes = require("./routes/users")
const ExpressError = require("./expressError")

app.use(express.json());

//  apply a prefix to every route in userRoutes
app.use("/", usersRoutes);

/** 404 handler */

app.use(function (req, res, next) {
  return new ExpressError("Not Found", 404);
});

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

module.exports = app;


