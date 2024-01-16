import Joi from 'joi'

const userCreateBodySchema = Joi.object({
  name: Joi.string().required().min(3).max(120),
  email: Joi.string().email().required().min(6).max(150),
  password: Joi.string().required().min(6).max(150),
  role: Joi.string().valid('user').required(),
})

const UserValidation = { userCreateBodySchema }

export default UserValidation
