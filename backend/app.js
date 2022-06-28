import 'dotenv/config'
import connectDB from './db.js'

import userRoute from './routes/userRoute.js'

import express from 'express'
const app = express()

// Middlewares
app.use(express.json())
connectDB()

app.listen(process.env.PORT || 4000)

app.use("/api/users", userRoute)