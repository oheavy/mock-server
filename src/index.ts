import { config } from 'dotenv'
import express, { json } from 'express'
config()

const app = express()

app.use(json())

const PORT = process.env.PORT

console.log(`Server listening on port ${PORT}\n-------------------------`)
