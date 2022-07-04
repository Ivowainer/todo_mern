import Image from 'next/image'

import Panel from '../components/loginpanel/Panel';
import MainLayout from "../layout/Head";
import useAuthProvider from '../hooks/useAuthProvider';
import { useEffect } from 'react';
import clientAxios from '../helpers/clientAxios';

export default function Home() {
  const { setLogin } = useAuthProvider()

  useEffect(() => {
    setLogin(true)

    const { data } = clientAxios()
  }, [])
  
  return (
    <>
      <MainLayout page="Sign In | todoCW"/>

      <div className="bg-gen h-screen w-screen py-8 px-5">
        <Panel />
      </div>
    </>
  )
}
