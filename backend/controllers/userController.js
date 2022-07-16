import generarJWT from "../helpers/generarJWT.js"
import { deleteImgCloudinary, uploadImgCloduinary } from "../libs/cloudinary.js"
import User from "../models/User.js"
import fs from 'fs-extra'

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
    const newUser = new User(req.body)
    await newUser.save()

    res.json({ newUser })
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
        const expires = new Date()
        expires.setHours(expires.getHours() + 8);

        res.cookie('token', generarJWT(user._id), {
            expires,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        }).json({ 
            _id: user._id,
            username: user.username,
            email: user.email,
        })
        
    } else {
        const error = new Error("The password is wrong")
        res.status(403).json({ msg: error.message })
    }
}

export const uploadImage = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        let image;
        
        if(req.user._id.toString() != req.params.id){
            const error = new Error("You don't have sufficient permissions")
            return res.status(401).json({ msg: error.message })
        }

        if(!req.files?.bgImage){
            const error = new Error("Doesn't exists the image")
            return res.status(403).json({ msg: error.message })
        }
        if(user.bgImage.url != undefined){
            // Eliminar foto anterior
            const deleteImg = await deleteImgCloudinary(user.bgImage.public_id)
        }

        const result = await uploadImgCloduinary(req.files.bgImage.tempFilePath)
        image = {
            url: result.secure_url,
            public_id: result.public_id
        }
        await fs.remove(req.files.bgImage.tempFilePath)

        user.bgImage = image

        const userUpdated = await user.save()

        res.json( userUpdated.bgImage )
    } catch (error) {
        console.log(error)
    }
}

export const deleteImg = async (req, res) => {
    const user = await User.findById(req.params.id)

    const deleteImg = await deleteImgCloudinary(user?.bgImage?.public_id)

    user.bgImage = {}

    const userUpdated = await user.save()

    res.json({ userUpdated })
}

export const getUserId = async (req, res) =>{
    try {
        const user = await User.findById(req.params.id)
    } catch (err) {
        const error = new Error("Not found the user")
        return res.status(404).json({ msg: error.message })
    }
}

export const getUser = async (req, res) => {
    if(!req.user){
        return res.status(401).json({ error: true })
    } 
    
    res.json( req.user )
}