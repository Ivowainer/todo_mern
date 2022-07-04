import { useState, createContext } from 'react'
import clientAxios from '../helpers/clientAxios'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false)

    const registerUser = async({ user }) => {
        console.log(user)
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                setLogin,
                registerUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider