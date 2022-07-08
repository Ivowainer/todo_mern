import React from 'react'

const Card = ({ name, description, author, priority }) => {
  return (
    <div className='flex flex-col w-1/5 h-48 my-10 text-gray-700'>
        <div className="rounded-t-xl bg-white shadow-2xl shadow-gray-400 h-full">
          <p className='border-b border-default px-5 py-2 text-center'>{name}<span className={`${priority == 'Low' && 'text-orange-400'} ${priority == 'Medium' && 'text-orange-600'} ${priority == 'High' && 'text-red-600'} text-[13px] font-semibold lowercase`}> {priority}</span></p>
          <p className='py-4 px-4'>{description}</p>
        </div>

        <div className="text-center h-1/4 w-full bg-default rounded-b-xl py-2">
            <p>{author}</p>
        </div>
    </div>
  )
}

export default Card