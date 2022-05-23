export default class Error {
  constructor(type, code, message, api_problem) {
    this.type = type;
    this.code = code;
    this.message = message;
    this.api_problem = api_problem;
  }
}
