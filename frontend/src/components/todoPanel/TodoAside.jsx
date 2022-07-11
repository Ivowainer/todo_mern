import { useEffect } from 'react'
import { FiArrowDown, FiArrowRight } from 'react-icons/fi'
import useTaskProvider from '../../hooks/useTaskProvider'

const TodoAside = () => {
  const { tasks, setNavPriority, navPriority } = useTaskProvider()

  const tasksCheck = tasks.filter(task => task.status === true)
  const tasksLow = tasks.filter(task => task.priority === "Low" && task.status === false)
  const tasksMid = tasks.filter(task => task.priority === "Medium" && task.status === false)
  const tasksHigh = tasks.filter(task => task.priority === "High" && task.status === false)
  return (
    <div className='aside-nav px-4 py-5 w-1/5 bg-white rounded-lg shadow-2xl'>
        <p className='mb-4 text-center'>Tasks</p>
        <div className="flex flex-col px-3 text-gray-500">
            <button 
              className='px-5 py-3 w-full flex items-center gap-2 text-start font-xl rounded-md border-b' 
              onClick={() => navPriority === 'Completed' ? setNavPriority('') : setNavPriority('Completed')}
            >{navPriority === 'Completed' ? <FiArrowDown /> : <FiArrowRight />}Completed</button>
            {navPriority === 'Completed' ? (
              <div>
                {tasksCheck.map(task => (
                  <p>{task.name}</p>
                ))}
              </div>
            ) : navPriority === 'Completed' && Object.keys(tasksCheck).length === 0 && "Doesn't exist a task checked"}

            <button 
              className='px-5 py-3 w-full flex items-center gap-2 text-start font-xl rounded-md border-b' 
              onClick={() => navPriority === 'High' ? setNavPriority('') : setNavPriority('High')}
            >{navPriority === 'High' ? <FiArrowDown /> : <FiArrowRight />}High</button>
            {navPriority === 'High' && Object.keys(tasksHigh).length !== 0 ? (
              <div className='px-5 mt-3 mb-5'>
                {tasksHigh?.map(task => (
                  <p className='underline'>{task.name}</p>
                ))}
              </div>
            ) : navPriority === 'High' && Object.keys(tasksHigh).length === 0 && "Doesn't exist a task with this priority"}

            <button 
              className='px-5 py-3 w-full flex items-center gap-2 text-start font-xl rounded-md border-b' 
              onClick={() => navPriority === 'Mid' ? setNavPriority('') : setNavPriority('Mid')}
            >{navPriority === 'Mid' ? <FiArrowDown /> : <FiArrowRight />}Mid</button>
            {navPriority === 'Mid' && Object.keys(tasksMid).length !== 0 ? (
              <div className='px-5 mt-3 mb-5'>
                {tasksMid?.map(task => (
                  <p className='underline'>{task.name}</p>
                ))}
              </div>
            ) : navPriority === 'Mid' && Object.keys(tasksMid).length === 0 && "Doesn't exist a task with this priority"}

            <button 
              className='px-5 py-3 w-full flex items-center gap-2 text-start font-xl rounded-md border-b' 
              onClick={() => navPriority === 'Low' ? setNavPriority('') : setNavPriority('Low')}
            >{navPriority === 'Low' ? <FiArrowDown /> : <FiArrowRight />}Low</button>
            {navPriority === 'Low' && Object.keys(tasksLow).length !== 0 ? (
              <div className='mt-3 mb-5 text-start'>
                {tasksLow?.map(task => (
                  <p className='underline'>{task.name}</p>
                ))}
              </div>
            ) : navPriority === 'Low' && Object.keys(tasksLow).length === 0 && "Doesn't exist a task with this priority"}

        </div>
    </div>
  )
}

export default TodoAside