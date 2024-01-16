/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response, NextFunction } from 'express'
import { Error } from 'mongoose'

import CustomError from '@src/errors/CustomError'
import handleValidationError from '@src/errors/handleValidationError'

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
    })
  }

  //  validation error handling
  if (err?.name === 'ValidationError') {
    const { errors, message } = handleValidationError(err)
    return res.status(400).json({ success: false, errors, message })
  }

  //  cast error handling
  if (err?.name === 'CastError') {
    return res.status(400).json({
      success: false,
      error: 'Invalid ID format',
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
