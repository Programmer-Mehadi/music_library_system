/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUSER } from '@src/app/modules/user/user.type'
import db from '@src/db'
import util from 'util'

const query = util.promisify(db.query).bind(db)

// create user
const createUserToDB = async (data: IUSER) => {
  const sqlQuery = `INSERT INTO users (name, email, password, role) VALUES ('${data.name}', '${data.email}', '${data.password}', '${data.role}')`

  return new Promise<{
    success: boolean
    message: string
    data: {
      data: object
    } | null
    code?: string
  }>((resolve, reject) => {
    db.query(sqlQuery, (err: any, result: any) => {
      if (err) {
        resolve({
          success: false,
          message: err.message,
          data: err,
          code: err.code,
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

// get all users
const getAllUsersFromDB = async () => {
  const sqlQuery = `SELECT * FROM users`
  const result = await query({
    sql: sqlQuery,
  })
  return {
    success: true,
    message: result ? 'Users fetched successfully' : 'Users not found',
    data: result,
  }
}

// single user
const getSingleUserFromDB = async (id: string) => {
  const result: any = await query({
    sql: `SELECT * FROM users WHERE id = ${id}`,
  })
  return {
    success: true,
    message: result.length ? 'User fetched successfully' : 'User not found',
    data: result[0] ? result[0] : null,
  }
}

const UserService = { createUserToDB, getAllUsersFromDB, getSingleUserFromDB }

export default UserService
