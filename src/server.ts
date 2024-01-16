import conn from '@src/conn'
import { Request, Response } from 'express'
import index from '@src/config/index'

const port = index.port

conn.get('/', (req: Request, res: Response) => {
  res.send({
    success: true,
    message: `🎵 Music Library System Backend Server Running Successfully 💖`,
  })
})

conn.listen(port, () => {
  console.log(`Music Library System Backend running on port ${port} 🌹`)
})
