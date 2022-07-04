import Image from 'next/image'

import Panel from '../components/loginpanel/Panel';
import MainLayout from "../layout/Head";
import usePanelProvider from '../hooks/usePanelProvider';
import { useEffect } from 'react';

export default function Home() {
  const { setLogin } = usePanelProvider()

  useEffect(() => {
    setLogin(true)
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

console.log("i,")
