import express from 'express'
import { createTask, getTask, getTasks } from '../controllers/taskController.js'
import checkAuth from '../middlewares/checkAuth.js'

const router = express.Router()

router
    .route('/')
    .post(checkAuth, createTask)
    .get(checkAuth, getTasks)

router.get('/:id', getTask)

export default router

