/* eslint-disable @typescript-eslint/no-explicit-any */
import UserService from '@src/app/modules/user/user.service'
import catchAsync from '@src/shared/catchAsync'
import sendResponse from '@src/shared/sendResponse'
import DuplicateError from '@src/errors/DuplicateError'
import CustomError from '@src/errors/CustomError'
import passwordBcrypt from '@src/helpers/passwordBcrypt'

const createUser = catchAsync(async (req, res, next) => {
  const data = req.body
  if (data.password.includes(' ')) {
    next(new CustomError('Password cannot contain spaces', 400, null))
  }
  const hashPassword = await passwordBcrypt.passwordHash(data.password)
  if (hashPassword === data.password) {
    next(new CustomError('Password is not hashed', 400, null))
  }
  let result: {
    success: boolean
    message: string
    data: {
      data: object
    } | null
    code?: string
  } = {
    success: false,
    message: '',
    data: null,
  }

  result = await UserService.createUserToDB(data)
  try {
    if (result?.success) {
      sendResponse({
        res,
        success: result.success,
        message: result.message,
        data: {
          data: result.data || {},
        },
        code: 200,
      })
    } else {
      if (result.code === 'ER_NO_SUCH_TABLE') {
        next(new CustomError(result.message, 400, null, 'No such table'))
      } else if (result.code === 'ER_DUP_ENTRY') {
        next(new DuplicateError(result.message, 400, null))
      } else {
        next(new CustomError(result.message, 400, null))
      }
    }
  } catch (err) {
    next(err)
  }
})

const UserController = { createUser }

export default UserController
