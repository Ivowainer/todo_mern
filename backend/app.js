import 'dotenv/config'
import express from 'express'

const app = express()

app.listen(process.env.PORT || 4000)