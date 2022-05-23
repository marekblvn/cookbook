class AppError extends Error {
  isKnown = true;
  code;
  message;
  status;
  error;

  constructor(code, message, status) {
    super(...arguments);
    this.code = code;
    this.message = message;
    this.status = status;
  }
}

module.exports = AppError;
