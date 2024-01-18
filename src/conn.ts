import errorHandler from '@src/app/middlewares/errorHandler'
import routes from '@src/app/routes/routes'
import express, { Request, Response } from 'express'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', routes)

app.use(errorHandler)

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: `🎵 Music Library System Backend Server Running Successfully 💖`,
  })
})

app.use('*', (req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    message: `🙄 Api ${req.originalUrl} not found 🚫`,
  })
})

app.use((error: Error, req: Request, res: Response) => {
  return res.status(500).json({
    success: false,
    error: {
      message: error?.message,
    },
    stack: error?.stack,
  })
})

const conn = app
export default conn
