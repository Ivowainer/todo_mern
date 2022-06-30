import jwt from "jsonwebtoken";
import User from "../models/User.js";

const checkAuth = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = await req.headers.authorization.split(' ')[1]

        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id)
            
            return next()
        } catch {
            const error = new Error("El token es incorrecto")
            res.status(403).json({ msg: error.message })
        }
    }

    if(!token){
        const error = new Error("El token no existe")
        res.status(403).json({ msg: error.message })
    }
}

export default checkAuth