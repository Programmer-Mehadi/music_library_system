/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUSER } from '@src/app/modules/user/user.type'
import db from '@src/db'

const createUserToDB = async (data: IUSER) => {
  const sqlQuery = `INSERT INTO users (name, email, password, role) VALUES ('${data.name}', '${data.email}', '${data.password}', '${data.role}')`

  return new Promise<{
    success: boolean
    message: string
    data: {
      data: object
    } | null
  }>((resolve, reject) => {
    db.query(sqlQuery, (err: any, result: any) => {
      if (err) {
        resolve({
          success: false,
          message: err.message,
          data: null,
        })
      } else {
        resolve({
          success: true,
          message: 'User created successfully',
          data: result,
        })
      }
    })
  })
}

const UserService = { createUserToDB }

export default UserService
