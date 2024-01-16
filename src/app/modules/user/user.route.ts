import validateRequest from '@src/app/middlewares/validateRequets'
import UserController from '@src/app/modules/user/user.controller'
import UserValidation from '@src/app/modules/user/user.validation'
import express from 'express'

const routes = express.Router()

routes.post(
  '/',
  validateRequest(UserValidation.userCreateBodySchema, { type: 'body' }),
  UserController.createUser,
)

routes.get('/:id', UserController.getSingleUser)

routes.get('/', UserController.getAllUsers)

const UserRoutes = routes

export default UserRoutes
