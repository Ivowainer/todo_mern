import { useEffect } from 'react'
import Panel from '../components/loginpanel/panel'
import useAuthProvider from '../hooks/useAuthProvider'
import MainLayout from '../layout/Head'

const register = () => {
  const { setLogin } = useAuthProvider()

  useEffect(() => {
    setLogin(false)
  }, []) 


  return (
    <>
      <MainLayout page="Home | todoCW"/>

      <div className="bg-gen h-screen w-screen py-8 px-5">
        <Panel />
      </div>
    </>
  )
}

export default register