import User from "../models/User.js"

export const register = async (req, res) => {

    const { email, username, password } = req.body

    /* COMPROBACIONES */
    if([email, username].includes('')){
        const error = new Error('Please, fill in all the fields')
        return res.status(401).json({ msg: error.message })
    }
    if(!username || !email || !password){
        const error = new Error("Please, fill in all the fields")
        return res.status(401).json({ msg: error.message })
    }

    const existsEmail = await User.findOne({ email })
    if(existsEmail){
        const error = new Error("This email is in use")
        return res.status(401).json({ msg: error.message })
    }

    const existsUserName = await User.findOne({ username })
    if(existsUserName){
        const error = new Error("This username exists")
        return res.status(401).json({ msg: error.message })
    }

    
    try {
        const newUser = new User(req.body)
        await newUser.save()

        return res.json({ newUser })
    } catch (error) {
        console.log(error)    
    }
}