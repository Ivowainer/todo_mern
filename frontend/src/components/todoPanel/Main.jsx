import { AiOutlinePlusCircle } from 'react-icons/ai'
import Card from './Card'
import ModalPanel from '../Modal'
import useTaskProvider from '../../hooks/useTaskProvider'
import useAuthProvider from '../../hooks/useAuthProvider'
import Alert from '../Alert'

import { motion } from 'framer-motion'

const Main = () => {
  const { isOpen, setIsOpen, tasks, setCreateMode } = useTaskProvider()
  const { alert } = useAuthProvider()

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <>
      {isOpen && <ModalPanel setIsOpen={setIsOpen} isOpen={isOpen} />}
      <div className='flex-col h-full w-full flex'>
        <div className="bg-white shadow-2xl sm:h-1/5 rounded-lg flex flex-col sm:flex-row items-center px-5 py-5 gap-3 sm:gap-7 sm:px-5  sm:pb-0 mb-5">
          <h1 className="uppercase font-bold text-default text-3xl">todocw</h1>
          <button className="flex w-full sm:m-0 transition-color flex-1 duration-500 items-center gap-1 outline-none justify-center text-md px-5 py-2 bg-default hover:bg-white rounded-lg text-white hover:text-default hover:border-default hover:border" onClick={() => {setIsOpen(true), setCreateMode(true)} }><AiOutlinePlusCircle/>Add Task</button>
        </div>
        <div className="bg-white shadow-2xl md:flex-1 overflow-y-scroll h-[500px] 2xl:h-[590px] rounded-lg flex flex-col w-full md:px-5 gap-1">
          {Object.keys(alert).length !== 0 && <Alert /> }
          <motion.div 
            className="my-2 md:my-5 flex gap-10 flex-1 flex-wrap justify-center container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {Object.keys(tasks).length === 0 && (
              <p className='text-2xl mt-10 text-gray-400'>No tasks created</p>
            )}
            {tasks.map(task => (
              <Card key={task._id} id={task._id} name={task.name} description={task.description} author={task.author} priority={task.priority} />
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Main