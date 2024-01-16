/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAUTH } from '@src/app/modules/auth/auth.type'
import db from '@src/db'
import util from 'util'

const query = util.promisify(db.query).bind(db)

const loginFromDB = async (data: IAUTH) => {
  const result: any = await query({
    sql: `SELECT email, password FROM users WHERE email = '${data.email}'`,
  })
  return {
    success: true,
    message: result[0] ? 'User found' : 'User not found',
    data: result[0] ? result[0] : null,
  }
}

const AuthService = {
  loginFromDB,
}

export default AuthService
