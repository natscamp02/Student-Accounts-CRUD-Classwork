const express = require("express");
const cors = require("cors");

const studentRouter = require("./routes/student");
const accountRouter = require("./routes/accounts");
const { globalErrorHandler } = require("./controllers/errors");

const app = express();

app.use(cors("*"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/accounts", accountRouter);

app.all("*", (req, res, next) => next(new Error(`Cannot find ${req.originalUrl}`)));
app.use(globalErrorHandler);

module.exports = app;
