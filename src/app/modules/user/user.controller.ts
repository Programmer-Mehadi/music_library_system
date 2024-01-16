/* eslint-disable @typescript-eslint/no-explicit-any */
import UserService from '@src/app/modules/user/user.service'
import catchAsync from '@src/shared/catchAsync'
import CustomError from '@src/errors/CustomError'
import sendResponse from '@src/shared/sendResponse'

const createUser = catchAsync(async (req, res, next) => {
  const data = req.body
  let result: {
    success: boolean
    message: string
    data: {
      data: object
    } | null
  } = {
    success: false,
    message: '',
    data: null,
  }
  try {
    result = await UserService.createUserToDB(data)
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
      next(new CustomError(result.message, 400, null))
    }
  } catch (err) {
    next(err)
  }
})

const UserController = { createUser }

export default UserController
