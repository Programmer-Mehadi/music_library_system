import AuthRoutes from '@src/app/modules/auth/auth.route'
import UserRoutes from '@src/app/modules/user/user.route'
import express from 'express'

const routes = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
]

moduleRoutes.forEach(route => routes.use(route.path, route.route))

export default routes
