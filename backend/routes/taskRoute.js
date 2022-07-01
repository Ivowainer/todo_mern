import express from 'express'
import { createTask, deleteTask, editTask, getTask, getTasks } from '../controllers/taskController.js'
import checkAuth from '../middlewares/checkAuth.js'

const router = express.Router()

router
    .route('/')
    .post(checkAuth, createTask)
    .get(checkAuth, getTasks)

router
    .route('/:id')
    .get(checkAuth, getTask)
    .post(checkAuth, editTask)
    .delete(checkAuth, deleteTask)

export default router

