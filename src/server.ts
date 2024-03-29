import conn from '@src/conn'
import index from '@src/config/index'
import db from '@src/db'

const port: number | string = index.port || 5500

async function main() {
  try {
    await db.connect(err => {
      if (err) {
        console.error('Error connecting to MySQL:', err)
      } else {
        console.log('Connected to MySQL database')
      }
      conn.listen(port, () => {
        console.log(`Music Library System Backend running on port ${port} 🌹`)
      })
    })
  } catch (err) {
    console.log('Server Error: 💀', err)
    console.log(err)
  }
}

main().catch(err => console.log(err))
