/* eslint-disable @typescript-eslint/no-explicit-any */
interface IDuplicateError {
  name: string
  message: string
  statusCode: number
  data: any
  isDuplicateError: boolean
  errorType?: string
}

class DuplicateError extends Error implements IDuplicateError {
  statusCode: number
  isDuplicateError: boolean
  data: any
  errorType?: string
  constructor(
    message: string,
    statusCode: number,
    data: any,
    errorType?: string,
  ) {
    super(message)
    this.name = 'DuplicateError'
    this.statusCode = statusCode
    this.data = data
    this.isDuplicateError = true
    this.errorType = errorType || 'duplicateError'
  }
}

export default DuplicateError
