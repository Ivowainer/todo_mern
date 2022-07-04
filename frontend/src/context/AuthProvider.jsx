import { useState, createContext } from 'react'
import clientAxios from '../helpers/clientAxios'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false)
    const [alert, setAlert] = useState({})
    const [user, setUser] = useState({})

    const registerUser = async(user) => {
        setUser({user})

        console.log(user)
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                setLogin,
                registerUser,
                alert,
                setAlert
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider