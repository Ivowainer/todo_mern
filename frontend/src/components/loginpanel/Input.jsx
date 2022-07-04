import React from 'react'

const Input = ({ icon, type, htmlfor, placeholder, set, value }) => {
  return (
    <div className=" bg-gray-200 w-full flex mb-3 gap-2 items-center text-md px-3 text-gray-500 rounded-md py-3">
        <label className='flex gap-3 w-5' htmlFor={htmlfor}>{icon}</label>
        <input 
          type={type} 
          id={htmlfor} 
          placeholder={placeholder} 
          onChange={set}
          value={value}
          className='w-full outline-none bg-gray-200'
        />
    </div>
  )
}

export default Input