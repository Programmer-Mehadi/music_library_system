import index from '@src/config/index'
import mysql from 'mysql2'

const connection = mysql.createConnection({
  host: index.dbUrl,
  user: 'root',
  password: '',
  database: 'music_library_system',
})

const db = connection

export default db
