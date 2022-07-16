import { deleteImg, getUser, getUserId, login, register, uploadImage } from '../controllers/userController.js'

import express from 'express'
import checkAuth from '../middlewares/checkAuth.js'
const router = express.Router()

router.post('/', register)

router.post('/login', login)

router.
    route('/user/:id')
    .post(checkAuth, uploadImage)
    .get(checkAuth, getUserId)
    .delete(checkAuth, deleteImg)

router.get('/user', checkAuth, getUser)

export default router