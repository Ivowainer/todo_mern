import 'dotenv/config'
import cors from 'cors'

import connectDB from './config/db.js'
import express from 'express'
import userRoute from './routes/userRoute.js'
import taskRoute from './routes/taskRoute.js'

const app = express()

//Cors
const corsOptions = {
    origin: function(origin, callback){
        if([process.env.FRONTEND_URL].includes(origin)){
            // Puede consultar la API
            callback(null, true);
        } else {
            // No se permite su Request
            callback(new Error('Error de Cors'))
        }
    }
}
app.use(cors(corsOptions))

// Middlewares
app.use(express.json())
connectDB()

// Routing
app.use("/api/users", userRoute)
app.use("/api/tasks", taskRoute)

app.listen(process.env.PORT || 4000)
