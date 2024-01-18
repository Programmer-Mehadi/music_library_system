import validateRequest from '@src/app/middlewares/validateRequets'
import UserController from '@src/app/modules/user/user.controller'
import UserValidation from '@src/app/modules/user/user.validation'
import express from 'express'

const routes = express.Router()

// create user
routes.post(
  '/',
  validateRequest(UserValidation.userCreateBodySchema, { type: 'body' }),
  UserController.createUser,
)

// single user
routes.get(
  '/:id',
  validateRequest(UserValidation.userGetSingleParamsSchema, {
    type: 'params',
  }),
  UserController.getSingleUser,
)

// get all users
routes.get('/', UserController.getAllUsers)

// delete user
routes.delete(
  '/:id',
  validateRequest(UserValidation.userGetSingleParamsSchema, {
    type: 'params',
  }),
  UserController.deleteUser,
)

// edit user
routes.patch(
  '/:id',
  validateRequest(UserValidation.userEditBodySchema, { type: 'body' }),
  UserController.editUser,
)
const UserRoutes = routes

export default UserRoutes
