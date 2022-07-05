import { useEffect } from 'react'
import clientAxios from '../helpers/clientAxios'
import useAuthProvider from '../hooks/useAuthProvider'
import MainLayout from '../layout/Head'

const panel = () => {

    const { getAuth } = useAuthProvider()
    
    useEffect(() => {
        getAuth()
    }, [])

    return (
        <>
            <MainLayout page="Panel | todoCW"/>
            
            <div>panel</div>
        </>
    )
}

export default panel