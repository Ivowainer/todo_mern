import { useState, createContext } from 'react'
import { useRouter } from 'next/router'

import clientAxios from '../helpers/clientAxios'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const router = useRouter()

    const [login, setLogin] = useState(false)
    const [user, setUser] = useState({})
    const [alert, setAlert] = useState({})
    const [page, setPage] = useState('')
    const [bgImage, setBgImage] = useState(null)
    const [id, setId] = useState('')

    const getAuth = async () => {
        try {
            const { data } = await clientAxios('/users/user')

            setUser(data)
        } catch {
            await router.push('/')
        }
    }

    const registerUser = async (user) => {
        try {
            const { data } = await clientAxios.post('/users', user)

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

            console.log(error)

            return
        }
    }

    const loginUser = async (user) => {
        try {
            const { data } = await clientAxios.post('/users/login', user)

            setAlert({
                msg: "Welcome again!",
                error: false
            })

            console.log(data._id)

            setId(data._id)

            setTimeout(() => {
                setAlert({})
                router.push('/tasks')
            }, 2000)
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

    const updateImageBg = async (img) => {
        if(img.length === 0) return setAlert({ msg: "You can't upload this Image", error: true})
        
        
        try{
            /* const bodyFormData =  new FormData();
            bodyFormData.append('bgImage', img); 

            console.log(bodyFormData) */

            const bgImage = img

            const { data }  = await clientAxios.post(`/users/user/${user._id}`, { bgImage }, {
                headers: { "Content-Type": "multipart/form-data" }
            })

            console.log(data)
        } catch(error) {
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
                setAlert,
                loginUser,
                getAuth,
                user,
                page, setPage,
                bgImage, setBgImage, updateImageBg
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider