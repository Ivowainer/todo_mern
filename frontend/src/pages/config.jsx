import { useEffect } from 'react'
import Image from 'next/image'

import useAuthProvider from '../hooks/useAuthProvider'
import MainLayout from '../layout/Head'
import PanelLayout from '../layout/PanelLayout'

const config = () => {
    const { getAuth, user } = useAuthProvider()

    useEffect(() => {
        getAuth()

        console.log(user)
    }, [])

    return (
        <>
            <MainLayout page="Config | todoCW" />

            <PanelLayout>
                <div className='bg-white shadow-card rounded-lg w-full px-10 flex flex-col'>
                    <div className='border-b'>
                        <div className='px-10 py-5 flex gap-10 items-center'>
                            <Image width={120} height={120} src="/profile_img.png" className='rounded-full'></Image>
                            <p className='text-orange-500 font-bold text-3xl'>{user.username}</p>
                        </div>
                    </div>
                    <div className='px-16 py-8 h-full'>
                        <div className=' bg-gray-500 text-white font-semibold bg-opacity-40 rounded-xl h-full flex items-center justify-center cursor-pointer'>
                            Select a background photo
                        </div>
                    </div>
                </div>
            </PanelLayout>
        </>
    )
}

export default config