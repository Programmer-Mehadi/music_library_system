import Joi from 'joi'

const loginBodySchema = Joi.object({
  email: Joi.string().email().required().min(6).max(150),
  password: Joi.string().required().min(6).max(150),
})

const AuthValidation = {
  loginBodySchema,
}
export default AuthValidation
