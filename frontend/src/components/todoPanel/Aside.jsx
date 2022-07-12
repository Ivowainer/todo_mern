import { BiTask } from 'react-icons/bi'
import { GrConfigure } from 'react-icons/gr'

import Link from 'next/link';
import useAuthProvider from '../../hooks/useAuthProvider';

const Aside = () => {
  const { page } = useAuthProvider()

  return (
    <div className='aside-nav px-7 shadow-card py-8 w-1/5 bg-white rounded-lg'>
        <p className='mb-4'>Nav Aside</p>
        <div className="flex flex-col px-3  text-gray-500">
          <Link href="/tasks" ><a className={`px-5 py-3 w-full flex items-center gap-2 text-start ${ page === 'tasks' && 'bg-default  text-white shadow-md'} font-xl rounded-md`}><BiTask />Tasks</a></Link>
          <Link href="/config" ><a className={`px-5 py-3 w-full flex items-center gap-2 text-start ${ page === 'config' && 'bg-default  text-white shadow-md'} font-xl rounded-md`}><GrConfigure />Options</a></Link>
        </div>
    </div>
  )
}

export default Aside