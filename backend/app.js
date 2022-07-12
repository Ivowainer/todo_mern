import 'dotenv/config'
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'

import connectDB from './config/db.js'
import express from 'express'
import userRoute from './routes/userRoute.js'
import taskRoute from './routes/taskRoute.js'

const app = express()

// Middlewares
app.use(cookieParser())
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload'
}))
connectDB()

// Routing
app.use("/api/users", userRoute)
app.use("/api/tasks", taskRoute)

app.listen(process.env.PORT || 4000)
