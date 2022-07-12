import { BiTask } from 'react-icons/bi'
import { GrConfigure } from 'react-icons/gr'

import Link from 'next/link';

const Aside = () => {
  return (
    <div className='aside-nav px-7 shadow-card py-8 w-1/5 bg-white rounded-lg'>
        <p className='mb-4'>Nav Aside</p>
        <div className="flex flex-col px-3  text-gray-500">
          <Link href="/tasks" ><a className='px-5 py-3 w-full flex items-center gap-2 text-start bg-default shadow-md text-white font-xl rounded-md'><BiTask />Tasks</a></Link>
          <Link href="/config" ><a className='px-5 py-3 w-full flex items-center gap-2 text-start font-xl rounded-md'><GrConfigure />Options</a></Link>
        </div>
    </div>
  )
}

export default Aside