import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'

interface IValidateType {
  type: 'body' | 'query' | 'params' | 'cookies'
}

const validateRequest =
  <T extends Joi.ObjectSchema<unknown>>(
    schema: T,
    validateType: IValidateType,
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (validateType.type === 'body') {
        await schema.validateAsync(req.body)
      }
      if (validateType.type === 'query') {
        await schema.validateAsync(req.query)
      }
      if (validateType.type === 'params') {
        await schema.validateAsync(req.params)
      }
      if (validateType.type === 'cookies') {
        await schema.validateAsync(req.cookies)
      }
      return next()
    } catch (error) {
      next(error)
    }
  }

export default validateRequest
