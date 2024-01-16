import UserService from '@src/app/modules/user/user.service'
import catchAsync from '@src/shared/catchAsync'
import CustomError from '@src/errors/CustomError'

const createUser = catchAsync(async (req, res, next) => {
  const data = req.body
  let result: {
    success: boolean
    message: string
    data: object | null
  } = {
    success: false,
    message: '',
    data: null,
  }
  try {
    result = await UserService.createUserToDB(data)
    if (result?.success) {
      res.status(200).json({
        success: true,
        data: result.data,
        message: 'User created successfully',
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
