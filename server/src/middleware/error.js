module.exports = (err, req, res, next) => {
  if (err.isKnown) {
    return res.status(err.status).send({
      message: err.message,
      code: err.code,
      error: err?.error?.toString(),
    });
  }

  return res.status(500).send({
    message: "Something failed on server",
    error: err.toString(),
  });
};
