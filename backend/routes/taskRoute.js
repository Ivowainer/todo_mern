import express from 'express'
import { createTask } from '../controllers/taskController.js'
import checkAuth from '../middlewares/checkAuth.js'

const router = express.Router()

router
    .route('/')
    .post(checkAuth, createTask)
    /* .get(getTasks) */

export default router

