import Joi from 'joi'

const userCreateBodySchema = Joi.object({
  name: Joi.string().required().min(3).max(120),
  email: Joi.string().email().required().min(6).max(150),
  password: Joi.string().required().min(6).max(150),
  role: Joi.string().valid('user').required(),
})

const userGetSingleParamsSchema = Joi.object({
  id: Joi.string().required().min(1),
})

const userEditBodySchema = Joi.object({
  name: Joi.string().min(3).max(120),
  email: Joi.string().email().min(6).max(150),
  role: Joi.string().valid('user'),
})

const UserValidation = {
  userCreateBodySchema,
  userGetSingleParamsSchema,
  userEditBodySchema,
}

export default UserValidation
