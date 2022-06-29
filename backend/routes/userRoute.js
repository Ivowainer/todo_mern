import { login, register } from '../controllers/userController.js'

import express from 'express'
const route = express.Router()

route.post('/', register)
route.post('/login', login)

export default route