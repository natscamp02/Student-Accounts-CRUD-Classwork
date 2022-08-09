const {ErrorRequestHandler} = require('express')

/**
 * Global express error handler
 * @type {ErrorRequestHandler}
 */
exports.globalErrorHandler = (err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ status: "error", message: err.message });
}