class appError extends Error {
  constructor() {
    super();
  }
  create({ message, status, code }) {
    this.message = message;
    this.status = status;
    this.code = code;
    return this
  }
}

export default new appError()
