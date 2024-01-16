import express from 'express'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const conn = app
export default conn
