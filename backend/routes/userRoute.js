import { register } from '../controllers/userController.js'

import express, { application } from 'express'
const route = express.Router()

route.post('/', register)

export default route