/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response, NextFunction } from 'express'
import { Error } from 'mongoose'

import CustomError from '@src/errors/CustomError'
import handleValidationError from '@src/errors/handleValidationError'
import DuplicateError from '@src/errors/DuplicateError'

const errorHandler = (
  err: Error | CustomError | any,
  req: Request,
  res: Response,
  // eslint-disable-next-line no-unused-vars
  next: NextFunction,
) => {
  // custom error handling
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
      data: err.data,
      errorType: err.errorType || 'customError',
    })
  }
  if (err instanceof DuplicateError) {
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
      data: err.data,
      errorType: err.errorType || 'duplicateError',
    })
  }

  //  validation error handling
  if (err?.name === 'ValidationError') {
    const { errors, message } = handleValidationError(err)
    return res
      .status(400)
      .json({ success: false, errors, message, errorType: 'validationError' })
  }

  // MySQL duplicate entry error handle
  if (err?.code === 'ER_DUP_ENTRY') {
    // Assuming you have a specific MySQL error code for duplicate entry
    return res.status(400).json({
      success: false,
      error: `Duplicate entry for key "${err.index}"`,
      data: err.values,
    })
  }
  // General MySQL error handle
  if (err instanceof Error && err.message.includes('ER_')) {
    return res.status(500).json({
      success: false,
      message: `MySQL Error: ${err.message}`,
      error: err.message,
    })
  }
  // duplicate error handle
  if (err?.code === 11000 || err?.codeName === 'DuplicateKey') {
    return res.status(400).json({
      success: false,
      error: `Duplicate key value "${Object.values(
        err.keyValue,
      )}" already exists`,
      data: err.keyValue,
    })
  }

  // General API error handling
  return res.status(500).json({
    success: false,
    message: err?.message || 'Internal Server Error',
    error: err?.message || 'Internal Server Error',
  })
}
export default errorHandler
