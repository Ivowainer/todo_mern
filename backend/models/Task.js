import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    name: String,
    status: Boolean,
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High']
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})