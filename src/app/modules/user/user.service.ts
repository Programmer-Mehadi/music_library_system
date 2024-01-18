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

// delete user
const deleteUserFromDB = async (id: string) => {
  const result: any = await query({
    sql: `DELETE FROM users WHERE id = ${id}`,
  })
  return {
    success: true,
    message: result.affectedRows
      ? 'User deleted successfully'
      : 'User not found',
    data: result,
  }
}

// edit user
const editUserFromDB = (id: number, user: Partial<IUSER>) => {
  let queryBuilder = ``
  const keys = Object.keys(user)
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const value = user[key as keyof IUSER]
    queryBuilder += `${key} = '${value}'`
    if (i !== keys.length - 1) {
      queryBuilder += ', '
    }
  }
  if (queryBuilder === '') {
    throw new Error('No data to update')
  } else {
    const result = query({
      sql: `UPDATE users SET ${queryBuilder} WHERE id = ${id}`,
    })
    return result
  }
}
const UserService = {
  createUserToDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
  editUserFromDB,
}

export default UserService
