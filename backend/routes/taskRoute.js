import express from 'express'
import { createTask, getTasks } from '../controllers/taskController.js'
import checkAuth from '../middlewares/checkAuth.js'

const router = express.Router()

router
    .route('/')
    .post(checkAuth, createTask)
    .get(checkAuth, getTasks)

export default router

