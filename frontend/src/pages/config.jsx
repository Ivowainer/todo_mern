import { useEffect } from 'react'
import Image from 'next/image'

import useAuthProvider from '../hooks/useAuthProvider'
import MainLayout from '../layout/Head'
import PanelLayout from '../layout/PanelLayout'

const config = () => {
    const { getAuth, setPage, user, updateImageBg, deleteImg } = useAuthProvider()

    useEffect(() => {
        getAuth()

        setPage('config')

        console.log(user)
    }, [])

    return (
        <>
            <MainLayout page="Config | todoCW" />

            <PanelLayout>
                <div className='bg-white shadow-card rounded-lg w-full px-10 flex flex-col'>
                    <div className='border-b'>
                        <div className='px-10 py-5 flex gap-5 justify-center items-center'>
                            <p className='text-default text-3xl font-bold '>Welcome Again!</p>
                        </div>
                    </div>
                    <div className='md:px-16 py-8 flex h-full flex-col'>
                        <label
                            className='h-36 bg-gray-500 text-white font-semibold bg-opacity-40 rounded-t-xl lg:h-full items-center justify-center cursor-pointer flex flex-col'
                        >
                            Upload a Image Background
                            <input 
                                onChange={ e => updateImageBg(e.target.files[0]) }
                                type="file" 
                                name="bgImage"
                                className='hidden text-sm'
                            />
                        </label>
                        <button 
                            className='text-white font-semibold rounded-b-md px-2 py-3 md:px-10 md:py-5 bg-red-500'
                            onClick={() => deleteImg()}
                        >
                            Restore the Background Image
                        </button>
                    </div>
                </div>
            </PanelLayout>
        </>
    )
}

export default config