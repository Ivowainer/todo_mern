import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import useTaskProvider from '../../hooks/useTaskProvider'

const Card = ({ id, name, description, author, priority }) => {
  const { getTask } = useTaskProvider()

  return (
    <div className='flex flex-col w-1/4 h-48 my-10 text-gray-700 px-3 pt-3 relative'>
        <button onClick={() => getTask(id)} className='absolute top-0 right-0 text-[10px] p-[8px] text-center bg-blue-500 rounded-full text-white cursor-pointer'><BsFillPencilFill /></button>
        <p className='border-b shadow-card border-default px-5 py-2 text-center'>{name}<span className={`${priority == 'Low' && 'text-orange-400'} ${priority == 'Medium' && 'text-orange-600'} ${priority == 'High' && 'text-red-600'} text-[13px] font-semibold lowercase`}> {priority}</span></p>
        <div className="shadow-card  bg-white h-full overflow-y-scroll">
          <p className='word-wrap py-4'>{description}</p>
        </div>
        

        <div className="text-white shadow-card text-center h-1/4 w-full bg-default rounded-b-xl py-2">
            <p>{author}</p>
        </div>
    </div>
  )
}

export default Card