import Joi from 'joi'

const loginBodySchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
})

const AuthValidation = {
  loginBodySchema,
}
export default AuthValidation
