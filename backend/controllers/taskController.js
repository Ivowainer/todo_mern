import mongoose from "mongoose"
import Task from "../models/Task.js"
import User from "../models/User.js"

export const createTask = async (req, res) => {
    const { name } = req.body
    
    // Comprobaciones
    const nameTaskExists = await Task.findOne({ name })

    const user = await User.findById(req.user._id)

    if(nameTaskExists){
        const error = new Error("A task with the same name already exists")
        return res.status(401).json({ msg: error.message })
    }
    
    //Guardar en la DB
    try {
        const task = new Task(req.body)
        
        task.creator = req.user._id

        const taskSaved = await task.save()

        user.tasks.push(taskSaved)
        await user.save();

        res.json({ taskSaved })
    } catch {
        const error = new Error("It ocurred an error in taskController, please inform the creator")
        return res.status(404).json({ msg: error.message })
    }
}

export const getTasks = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate("tasks")

        return res.json({ tasks: user.tasks })
    } catch (error) {
        console.log(error)
    }
}

