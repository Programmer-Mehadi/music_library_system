/* eslint-disable @typescript-eslint/no-explicit-any */
interface ICustomError {
  name: string
  message: string
  statusCode: number
  data: any
  isCustomError: boolean
}

class CustomError extends Error implements ICustomError {
  statusCode: number
  isCustomError: boolean
  data: any
  constructor(message: string, statusCode: number, data: any) {
    super(message)
    this.name = 'CustomError'
    this.statusCode = statusCode
    this.data = data
    this.isCustomError = true
  }
}

export default CustomError
