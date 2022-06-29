import 'dotenv/config'
import connectDB from './config/db.js'
import express from 'express'
import userRoute from './routes/userRoute.js'
import taskRoute from './routes/taskRoute.js'

const app = express()

// Middlewares
app.use(express.json())
connectDB()

// Routing
app.use("/api/users", userRoute)
app.use("/api/tasks", taskRoute)

app.listen(process.env.PORT || 4000)
