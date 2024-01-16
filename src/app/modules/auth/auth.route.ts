import CustomError from '@src/errors/CustomError'
import express from 'express'

const routes = express.Router()

routes.post('/login', (req, res, next) => {
  const newError = new CustomError('Something went wrong!', 404, null)
  next(newError)
  // res.json({ message: 'Login' })
})

const AuthRoutes = routes

export default AuthRoutes
