import { BiTask } from 'react-icons/bi'
import { GrConfigure } from 'react-icons/gr'

const Aside = () => {
  return (
    <div className='px-7 py-8 w-1/5 bg-white rounded-lg shadow-2xl'>
        <p className='mb-4'>Nav Aside</p>
        <div className="flex flex-col px-3">
            <button className='px-5 py-3 w-full flex items-center gap-2 text-start bg-default shadow-md text-white font-xl rounded-md'><BiTask />Tasks</button>
            <button className='px-5 py-3 w-full flex items-center gap-2 text-start text-black font-xl rounded-md'><GrConfigure />Options</button>
        </div>
    </div>
  )
}

export default Aside