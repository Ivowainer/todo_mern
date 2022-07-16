import { useState, createContext } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';

import clientAxios from '../helpers/clientAxios'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const router = useRouter()

    const [login, setLogin] = useState(false)
    const [user, setUser] = useState({})
    const [alert, setAlert] = useState({})
    const [page, setPage] = useState('')
    const [bgImage, setBgImage] = useState('')
    const [id, setId] = useState('')

    const getAuth = async () => {
        try {
            const { data } = await clientAxios('/users/user')

            setUser(data)
            setId(data._id)
            setBgImage(data.bgImage?.url)
        } catch (error) {
            await router.push('/')
        }
    }

    const registerUser = async (user) => {
        try {
            const { data } = await clientAxios.post('/users', user)
            
            toast.success("The account has been created with successful")

            setTimeout(() => {
                router.push('/')
            }, 2000)
            return

        } catch (error) {
            toast.error(error.response?.data?.msg)
            return
        }
    }

    const loginUser = async (user) => {
        try {
            const { data } = await clientAxios.post('/users/login', user)

            toast.success("Welcome again!")
            setTimeout(() => {
                router.push('/tasks')
            }, 2000) 
        } catch (error) {
            toast.error(error.response?.data?.msg)
            return
        }
    }

    const updateImageBg = async (img) => {
        if(img === undefined || img.type !== "image/png" && img.type !== "image/jpeg") return toast.error("You can't upload this Image")

        try{
            const bgImage = img

            const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
            toast.promise(
                resolveAfter3Sec,
                {
                  pending: 'The background is changing',
                  success: 'Promise resolved 👌',
                  error: 'Promise rejected 🤯'
                }
            )

            const { data }  = await clientAxios.post(`/users/user/${user._id}`, { bgImage }, {
                headers: { "Content-Type": "multipart/form-data" }
            })

            setBgImage(data.url)
        } catch(error) {
            console.log(error)
        }
    }

    const deleteImg = async () => {
        
        try {
            const { data } = await clientAxios.delete(`/users/user/${user._id}`)
            
            setBgImage(undefined)
            
            toast.success('Background Image reseted')
        } catch (error) {
            toast.error(error.response.data.msg)
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
                bgImage, setBgImage, updateImageBg, deleteImg
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider