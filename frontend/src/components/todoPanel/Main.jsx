import { AiOutlinePlusCircle } from 'react-icons/ai'
import Card from './Card'

import { useState, useEffect } from 'react'
import ModalPanel from '../Modal'
import useTaskProvider from '../../hooks/useTaskProvider'

import clientAxios from '../../helpers/clientAxios'
import useAuthProvider from '../../hooks/useAuthProvider'
import Alert from '../Alert'

const Main = () => {
  const { isOpen, setIsOpen, tasks, setCreateMode } = useTaskProvider()
  const { alert } = useAuthProvider()

  return (
    <>
      {isOpen && <ModalPanel setIsOpen={setIsOpen} isOpen={isOpen} />}
      <div className='flex-col h-full w-full flex'>
        <div className="bg-white shadow-2xl h-1/5 rounded-lg flex items-center px-10 mb-5">
          <button className="flex transition-color duration-500 items-center gap-1 outline-none justify-center text-md px-5 py-2 bg-default hover:bg-white rounded-lg text-white hover:text-default hover:border-default hover:border" onClick={() => {setIsOpen(true) 
                                                                                                                                                                                                                                                                setCreateMode(true)} }><AiOutlinePlusCircle/>Add Task</button>
        </div>
        <div className="bg-white shadow-2xl h-[500px] 2xl:h-[590px] rounded-lg flex flex-col w-full px-10 gap-1">
          {Object.keys(alert).length !== 0 && <Alert /> }
          <div className="flex gap-10 flex-1 flex-wrap overflow-y-scroll">
            {tasks.map(task => (
              <Card key={task._id} id={task._id} name={task.name} description={task.description} author={task.author} priority={task.priority}/>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Main