import AuthRoutes from '@src/app/modules/auth/auth.route'
import express from 'express'

const routes = express.Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
]

moduleRoutes.forEach(route => routes.use(route.path, route.route))

export default routes