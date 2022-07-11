import { FiArrowRight } from 'react-icons/fi'

const TodoAside = () => {
  return (
    <div className='aside-nav px-4 py-5 w-1/5 bg-white rounded-lg shadow-2xl'>
        <p className='mb-4 text-center'>Tasks</p>
        <div className="flex flex-col px-3 text-gray-500">
            <button className='px-5 py-3 w-full flex items-center gap-2 text-start font-xl rounded-md border-b'><FiArrowRight />Completed</button>
            <button className='px-5 py-3 w-full flex items-center gap-2 text-start font-xl rounded-md border-b'><FiArrowRight />High</button>
            <button className='px-5 py-3 w-full flex items-center gap-2 text-start font-xl rounded-md border-b'><FiArrowRight />Mid</button>
            <button className='px-5 py-3 w-full flex items-center gap-2 text-start font-xl rounded-md border-b'><FiArrowRight />Low</button>
        </div>
    </div>
  )
}

export default TodoAside