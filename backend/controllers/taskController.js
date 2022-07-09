import mongoose from "mongoose"
import Task from "../models/Task.js"
import User from "../models/User.js"

export const createTask = async (req, res) => {
    const { name } = req.body
    
    // Comprobaciones
    const nameTaskExists = await Task.findOne({ name })

    const user = await User.findById(req.user._id)

    if(nameTaskExists?.creator?.toString() === req.user._id.toString() && nameTaskExists?.name?.toString() === req.body.name.toString()){
        const error = new Error("A task with the same name already exists")
        return res.status(401).json({ msg: error.message })
    }
    
    //Guardar en la DB
    try {
        const task = new Task(req.body)
        
        task.creator = req.user._id
        task.author = req.user.username

        const taskSaved = await task.save()

        user.tasks.push(taskSaved)
        await user.save();

        res.json( taskSaved )
    } catch (err) {
        const error = new Error("It ocurred an error in taskController, please inform the creator")
        return res.status(404).json({ msg: error.message })
    }
}

export const getTasks = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate("tasks")

        res.json( user.tasks )
    } catch (error) {
        console.log(error)
    }
}

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        
        // Comprobación
        if(req.user._id.toString() !== task.creator._id.toString()){
            const error = new Error("You don't have enough permissions")
            return res.status(403).json({ msg: error.message })
        }

        res.json({ task })
    } catch (err) {
        const error = new Error("The task doesn't exists")
        return res.status(401).json({ msg: error.message })
    }
}

export const editTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)

        // Comprobación
        if(req.user._id.toString() !== task.creator._id.toString()){
            const error = new Error("You don't have enough permissions")
            return res.status(403).json({ msg: error.message })
        }

        task.name = req.body.name
        task.description = req.body.description
        task.priority = req.body.priority

        const taskUpdated = await task.save()

        res.json({ taskUpdated })

    } catch {
        const error = new Error("The task doesn't exists")
        return res.status(401).json({ msg: error.message })
    }
}

export const deleteTask = async (req, res) => {
    try{
        const task = await Task.findById(req.params.id).populate("creator")

        const userTa = task.creator

        // Comprobación
        if(req.user._id.toString() !== userTa._id.toString()){
            const error = new Error("You don't have enough permissions")
            return res.status(403).json({ msg: error.message })
        }

        // Delete task
        const taskDeleted = await task.deleteOne()

        await userTa.tasks.pull(req.params.id)
        await userTa.save();

        res.json({ taskDeleted })
    } catch (err){
        /* const error = new Error("The task doesn't exists")
        return res.status(401).json({ msg: error.message }) */
        console.log(err)
    }
}

