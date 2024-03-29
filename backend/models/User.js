import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        require: true
    },
    password: {
        type: String,
        trim: true,
        require: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        require: true
    },
    token: {
        type: String,
        default: ""
    },
    bgImage: {
        url: String,
        public_id: String
    },
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ]
})

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.verifyPassword = async function(passwordForm) {
    return await bcrypt.compare(passwordForm, this.password)
}

const User = mongoose.model("User", userSchema)
export default User