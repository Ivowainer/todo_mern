import User from "../models/User.js"

export const register = async (req, res) => {

    const { email, username, password } = req.body

    if([email, username].includes('')){
        console.log('d')
    }
    
    try {
        const newUser = new User(req.body)
        newUser.save()

        return res.json({ newUser })
    } catch (error) {
        console.log(error)    
    }
}