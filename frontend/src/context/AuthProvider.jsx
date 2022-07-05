import { useState, createContext } from 'react'
import { useRouter } from 'next/router'

import clientAxios from '../helpers/clientAxios'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const router = useRouter()

    const [login, setLogin] = useState(false)
    const [alert, setAlert] = useState({})

    const registerUser = async (user) => {
        try {
            const { data } = await clientAxios.post('/users', user)

            console.log(data)

            setAlert({
                msg: "The account has been created with successful",
                error: false
            })
            setTimeout(() => {
                setAlert({})    

                router.push('/')
            }, 2000)

            return

        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
            setTimeout(() => {
                setAlert({})
            }, 2000)

            return
        }
    }

    const loginUser = async (user) => {
        try {
            const { data } = await clientAxios.post('/users/login', user)

            const userData = {
                token: data.token,
                id: data._id
            }

            document.cookie = JSON.stringify(userData)

            setAlert({
                msg: "Welcome again!",
                error: false
            })

            setTimeout(() => {
                setAlert({})
                router.push('/panel')
            }, 2000)

            return
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
            setTimeout(() => {
                setAlert({})
            }, 2000)

            return
        }
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                setLogin,
                registerUser,
                alert,
                setAlert,
                loginUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider