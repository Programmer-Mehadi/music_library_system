/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import config from '@src/config/index'
import CustomError from '@src/errors/CustomError'
import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

const auth =
  (...rolesList: string[]) =>
  async (req: any, res: Response, next: NextFunction) => {
    try {
      // check token in headers
      if (!req.headers.authorization) {
        return next(
          new CustomError('Token not found', 400, null, 'validationError'),
        )
      }
      const token = req.headers.authorization.split(' ')[1]
      // verify token by jwt
      const verify: JwtPayload | any = await jwt.verify(token, config.jwtSecret)
      if (verify) {
        // set user data
        req.user = verify
        if (rolesList.includes(verify.role)) {
          return next()
        }
        // if not authorized then return error
        return next(
          new CustomError(
            'You are not authorized',
            401,
            null,
            'authorizedError',
          ),
        )
      }
      //  if token not found then return error
      else {
        return next(
          new CustomError('Token not found', 400, null, 'validationError'),
        )
      }
    } catch (error) {
      next(error)
    }
  }

export default auth
