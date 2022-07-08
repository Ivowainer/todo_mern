import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    name: String,
    status: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High']
    },
    description: String,
    author: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Task = mongoose.model("Task", taskSchema)

export default Task