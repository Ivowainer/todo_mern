import { createContext, useState } from 'react'
import clientAxios from '../helpers/clientAxios'

export const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')

  const createTask = async () => {
    const { data } = await clientAxios.post('/tasks', { name, description, priority })

    console.log(data)
  }

  return (
    <TaskContext.Provider
      value={{
        name, setName,
        description, setDescription,
        priority, setPriority,
        createTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
