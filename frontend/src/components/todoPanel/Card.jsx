import React from 'react'

const Card = ({ title, description, author }) => {
  return (
    <div className='flex flex-col w-1/8 h-1/4 my-10'>
        <div className="rounded-t-xl bg-white shadow-2xl shadow-gray-400">
            <p className='border-b border-default px-5 py-2 text-center'>{title}</p>
            <p className='px-10 py-8'>{description}</p>
        </div>

        <div className="text-center h-full w-full bg-default rounded-b-xl py-2">
            <p>{author}</p>
        </div>
    </div>
  )
}

export default Card