import User from "../models/User.js"

export const register = async (req, res) => {

    const { email, username, password } = req.body

    /* COMPROBACIONES */
    if([email, username, password].includes('')){
        const error = new Error('Please, fill in all the fields')
        return res.status(401).json({ msg: error.message })
    }

    const existsEmail = await User.findOne({ email })
    if(existsEmail){
        const error = new Error("This email is in use")
        return res.status(401).json({ msg: error.message })
    }

    const existsUserName = await User.findOne({ username })
    if(existsUserName){
        const error = new Error("This username is in use")
        return res.status(401).json({ msg: error.message })
    }

    /* Registrar usuario */
    try {
        const newUser = new User(req.body)
        await newUser.save()

        return res.json({ newUser })
    } catch (error) {
        console.log(error)    
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body  

    // Encuentra el usuario por su email
    const user = await User.findOne({ email })

    if(!user){
        const error = new Error("This user doesn't exists")
        return res.status(403).json({ msg: error.message })
    }

    // Comprobar password 
    if(await user.verifyPassword(password)){
        return res.json({ msg: 'Logeado correctamente' })
    } else {
        const error = new Error("The password is wrong")
        return res.status(403).json({ msg: error.message })
    }
}