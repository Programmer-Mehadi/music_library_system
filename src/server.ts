import app from "@src/app"
import { Request, Response } from "express"

const port = 5500

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: `🎵 Music Library System Backend Server Running Successfully 💖`,
  })
})

app.listen(port, () => {
  console.log(`Music Library System Backend running on port ${port} 🌹`)
})
