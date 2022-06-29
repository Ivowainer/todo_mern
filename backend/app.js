import 'dotenv/config'
import connectDB from './config/db.js'
import express from 'express'
import userRoute from './routes/userRoute.js'

const app = express()

// Middlewares
app.use(express.json())
connectDB()

// Routing
app.use("/api/users", userRoute)

app.listen(process.env.PORT || 4000)
