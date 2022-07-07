import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col w-1/8 h-1/4 my-10 rounded-y-sm bg-default '>
        <p>Title</p>
        <p>Description</p>

        <div className="text-center h-full w-full">
            <p>Author</p>
        </div>
    </div>
  )
}

export default Card