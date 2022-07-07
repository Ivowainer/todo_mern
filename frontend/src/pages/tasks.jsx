import { useEffect } from 'react'
import Main from '../components/todoPanel/Main'
import clientAxios from '../helpers/clientAxios'

import useAuthProvider from '../hooks/useAuthProvider'
import MainLayout from '../layout/Head'
import PanelLayout from '../layout/PanelLayout'

const tasks = () => {

    const { getAuth } = useAuthProvider()
    
    useEffect(() => {
        getAuth()
    }, [])

    return (
        <>
            <MainLayout page="Tasks | todoCW"/>
        
            <PanelLayout>
                <Main />
            </PanelLayout>
        </>
    )
}

export default tasks