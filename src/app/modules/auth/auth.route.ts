import validateRequest from '@src/app/middlewares/validateRequets'
import AuthController from '@src/app/modules/auth/auth.controller'
import AuthValidation from '@src/app/modules/auth/auth.validation'

import express from 'express'

const routes = express.Router()

routes.post(
  '/login',
  validateRequest(AuthValidation.loginBodySchema, { type: 'body' }),
  AuthController.login,
)

routes.get('/verify', AuthController.verify)

const AuthRoutes = routes

export default AuthRoutes
