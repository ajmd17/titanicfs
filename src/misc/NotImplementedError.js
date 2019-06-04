export default class NotImplementedError extends Error {
  constructor(className, methodName) {
    super(`Method ${className}#${methodName} called without a defined implementation`)
    this.name = NotImplementedError
  }
}
