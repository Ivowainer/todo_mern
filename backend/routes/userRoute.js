import { getUser, login, register } from '../controllers/userController.js'

import express from 'express'
import checkAuth from '../middlewares/checkAuth.js'
const route = express.Router()

route.post('/', register)
route.post('/login', login)
route.get('/user', checkAuth, getUser)

export default route