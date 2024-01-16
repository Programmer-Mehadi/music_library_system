/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import AuthService from '@src/app/modules/auth/auth.service'
import CustomError from '@src/errors/CustomError'
import { jwtHelpers } from '@src/helpers/jwtHelpers'
import passwordBcrypt from '@src/helpers/passwordBcrypt'
import catchAsync from '@src/shared/catchAsync'
import sendResponse from '@src/shared/sendResponse'
import config from '@src/config/index'
import { Request, Response } from 'express'
/* eslint-disable @typescript-eslint/no-explicit-any */

// login user
const login = catchAsync(async (req, res, next) => {
  const result: any = await AuthService.loginFromDB(req.body)

  if (result?.data) {
    const isMatchPassword = passwordBcrypt.passwordCompare(
      req?.body?.password,
      result?.data?.password,
    )
    if (!isMatchPassword) {
      next(
        new CustomError(
          'Password is not matched',
          400,
          null,
          'validationError',
        ),
      )
    } else {
      const token = jwtHelpers.createToken(
        {
          email: result.data.email,
        },
        config.jwtSecret,
        '2h',
      )
      result.data.token = token
      sendResponse({
        res,
        success: result.success,
        message: result.message,
        data: {
          data: {
            email: result.data.email,
            token: result.data.token,
          },
        },
        code: 200,
      })
    }
  } else {
    sendResponse({
      res,
      success: result.success,
      message: result.message,
      data: {
        data: result.data || null,
      },
      code: 200,
    })
  }
})

// verify user
const verify = catchAsync(async (req: Request, res: Response, next) => {
  if (req?.headers?.authorization) {
    if (req?.headers?.authorization?.split(' ')) {
      const result: any = jwtHelpers.verifyToken(
        req?.headers?.authorization?.split(' ')[1],
        config.jwtSecret,
      )

      sendResponse({
        res,
        success: result?.email ? true : false,
        message: result?.email ? 'Token verified' : 'Token not found',
        data: {
          data: { email: result?.email } || null,
        },
        code: 200,
      })
    } else {
      sendResponse({
        res,
        success: false,
        message: 'Token not found',
        data: {
          data: null,
        },
        code: 200,
      })
    }
  } else {
    sendResponse({
      res,
      success: false,
      message: 'Token not found',
      data: {
        data: null,
      },
      code: 200,
    })
  }
})
const AuthController = {
  login,
  verify,
}

export default AuthController
