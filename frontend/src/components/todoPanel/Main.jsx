import { AiOutlinePlusCircle } from 'react-icons/ai'

const Main = () => {
  return (
    <div className='flex-col h-full w-full'>
      <div className="bg-white shadow-2xl h-1/5 rounded-lg flex items-center px-10 mb-5">
        <button className="flex items-center gap-1 outline-none justify-center text-md px-5 py-2 bg-default hover:bg-white rounded-lg text-white hover:text-default hover:border-default hover:border "><AiOutlinePlusCircle/>Add Task</button>
      </div>
      <div className="bg-white shadow-2xl h-10 rounded-lg">
        d
      </div>
    </div>
  )
}

export default Main