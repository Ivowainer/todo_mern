import { createContext, useState, useEffect } from 'react'
import clientAxios from '../helpers/clientAxios'
import useAuthProvider from '../hooks/useAuthProvider'

export const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [task, setTask] = useState({})
  const [tasks, setTasks] = useState([])

  const { setAlert } = useAuthProvider()

  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data } = await clientAxios('/tasks')

        setTasks(data)
      } catch (error) {
        console.log(error)
      }
    }

    getTasks()

  }, [])
  
  const createTask = async () => {
    //Comprobaciones
    if([name, description, priority].includes('')){
      setAlert({
        msg: "Fill all the fields",
        error: true
      })
      
      setTimeout(() => {
        setAlert({})
      }, 2500)
      return
    }
    if(description.length >= 14){
      setAlert({
        msg: "The maxium of caracters is 14",
        error: true
      })
      
      setTimeout(() => {
        setAlert({})
      }, 2500)
      return
    }
    if([name, description].length < 3){
      setAlert({
        msg: "The minium of caracters is 3",
        error: true
      })
      
      setTimeout(() => {
        setAlert({})
      }, 2500)
      return
    }

    try {
      const { data } = await clientAxios.post('/tasks', { name, description, priority })

      setTasks([...tasks, data])

      setAlert({ 
        msg: "Task created successfully",
        error: false
      })
      setTimeout(() => {
        setAlert({})
      }, 2500)

      setName('')
      setDescription('')
      setPriority('')
    } catch (error) {
      /* setAlert({
        msg: error.response.data.msg,
        error: true
      })
      setTimeout(() => {
        setAlert({})
      }, 2500) */ //TODO
      console.log(error)
    }  
  }

  return (
    <TaskContext.Provider
      value={{
        name, setName,
        description, setDescription,
        priority, setPriority,
        createTask,
        isOpen, setIsOpen,
        tasks
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
