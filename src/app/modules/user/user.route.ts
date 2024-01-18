import auth from '@src/app/middlewares/auth'
import validateRequest from '@src/app/middlewares/validateRequets'
import UserController from '@src/app/modules/user/user.controller'
import UserValidation from '@src/app/modules/user/user.validation'
import { ENUM_USER_ROLE } from '@src/enums/role'
import express from 'express'

const routes = express.Router()

// create user
routes.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
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
routes.get('/', auth('admin', 'user'), UserController.getAllUsers)

// delete user
routes.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(UserValidation.userGetSingleParamsSchema, {
    type: 'params',
  }),
  UserController.deleteUser,
)

// edit user
routes.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.USER),
  validateRequest(UserValidation.userEditBodySchema, { type: 'body' }),
  UserController.editUser,
)
const UserRoutes = routes

export default UserRoutes
