import mongoose from "mongoose"
import Task from "../models/Task.js"

export const createTask = async (req, res) => {
    const { name } = req.body
    
    // Comprobaciones
    const nameTaskExists = await Task.findOne({ name })
    if(nameTaskExists){
        const error = new Error("A task with the same name already exists")
        return res.status(401).json({ msg: error.message })
    }
    
    //Guardar en la DB
    try {
        const task = new Task(req.body)
        
        const taskSaved = await task.save()

        res.json({ taskSaved })
    } catch {
        const error = new Error("It ocurred an error in taskController, please inform the creator")
        return res.status(404).json({ msg: error.message })
    }
}
