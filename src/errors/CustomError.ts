/* eslint-disable @typescript-eslint/no-explicit-any */
interface ICustomError {
  name: string
  message: string
  statusCode: number
  data: any
  isCustomError: boolean
  errorType?: string
}

class CustomError extends Error implements ICustomError {
  statusCode: number
  isCustomError: boolean
  data: any
  errorType?: string
  constructor(
    message: string,
    statusCode: number,
    data: any,
    errorType?: string,
  ) {
    super(message)
    this.name = 'CustomError'
    this.statusCode = statusCode
    this.data = data
    this.isCustomError = true
    this.errorType = errorType || 'customError'
  }
}

export default CustomError
