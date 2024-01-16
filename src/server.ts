import conn from '@src/conn'
import index from '@src/config/index'
import mysql from 'mysql2'

const port: number | string = index.port || 5500

const connection = mysql.createConnection({
  host: index.dbUrl,
  user: 'root',
  password: '',
  database: 'music_library_system',
})

async function main() {
  try {
    connection.connect(err => {
      if (err) {
        console.error('Error connecting to MySQL:', err)
      } else {
        console.log('Connected to MySQL database')
      }
    })
    conn.listen(port, () => {
      console.log(`Music Library System Backend running on port ${port} 🌹`)
    })
  } catch (err) {
    console.log('Server Error: 💀', err)
    console.log(err)
  }
}

main().catch(err => console.log(err))
