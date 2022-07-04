import { useState, createContext } from 'react'
import clientAxios from '../helpers/clientAxios'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(false)
    const [alert, setAlert] = useState({})

    const registerUser = async(user) => {

        try {
            const { data } = clientAxios.post('http://localhost:4000/api/users', user)

            /* console.log(s.response.data) */

            /* setAlert({
                msg: "The account has been created with successful"
            }) */
        } catch (error) {
            console.log(error)
        }

        
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