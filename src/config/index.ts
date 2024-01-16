/* eslint-disable no-undef */
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.join(process.cwd(), '../../.env'),
})

export default {
  port: process.env.PORT || 5500,
  dbUrl: process.env.SQL_URL || 'localhost',
  jwtSecret:
    process.env.JWT_SECRET ||
    '73y47ryeht78yc5t7854tyb7845ty56783c64b5rtv7634c7rt45',
}
