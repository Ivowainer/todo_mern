import { BiTask, BiCog } from 'react-icons/bi'

import Link from 'next/link';
import useAuthProvider from '../../hooks/useAuthProvider';

const Aside = () => {
  const { page } = useAuthProvider()

  return (
    <div className='aside-nav px-7 shadow-card py-8 w-1/5 bg-white rounded-lg flex flex-col h-full justify-between'>
        <div className='flex flex-col'>
            <p className='mb-4'>Nav Aside</p>
            <div className="px-3  text-gray-500">
              <Link href="/tasks" ><a className={`px-5 py-3 w-full flex items-center gap-2 text-start ${ page === 'tasks' && 'bg-default  text-white shadow-md'} font-xl rounded-md`}><BiTask />Tasks</a></Link>
              <Link href="/config" ><a className={`px-5 py-3 w-full flex items-center gap-2 text-start ${ page === 'config' && 'bg-default  text-white shadow-md'} font-xl rounded-md`}><BiCog />Options</a></Link>
            </div>
        </div>
        <button className='px-3 py-3 rounded-xl font-bold bg-red-500 hover:bg-red-600 transition-colors duration-700 w-full text-white mt-10 md:m-0'>Logout</button>
    </div>
  )
}

export default Aside