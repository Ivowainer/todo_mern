import { useEffect } from 'react'
import Panel from '../components/loginpanel/panel'
import usePanelProvider from '../hooks/usePanelProvider'
import MainLayout from '../layout/Head'

const register = () => {
  const { login, setLogin } = usePanelProvider()

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