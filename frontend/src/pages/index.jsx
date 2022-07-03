import Image from 'next/image'

import Panel from '../components/loginpanel/Panel';
import MainLayout from "../layout/Head";

export default function Home() {
  return (
    <>
      <MainLayout page="Home | todoCW"/>

      <div className="bg-gen h-screen w-screen py-8 px-5">
        <Panel />
      </div>
    </>
  )
}
