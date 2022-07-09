import { createContext, useState, useEffect } from 'react'
import clientAxios from '../helpers/clientAxios'
import useAuthProvider from '../hooks/useAuthProvider'

export const TaskContext = createContext()

const TaskProvider = ({ children }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [createMode, setCreateMode] = useState(true)
  const [task, setTask] = useState({})
  const [tasks, setTasks] = useState([])
  const [id, setId] = useState('')

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
    if(description.length >= 60){
      setAlert({
        msg: "The maxium of caracters is 60",
        error: true
      })
      
      setTimeout(() => {
        setAlert({})
      }, 2500)
      return
    }
    if(name.length < 3){
      setAlert({
        msg: "The minium of caracters is 3",
        error: true
      })
      
      setTimeout(() => {
        setAlert({})
      }, 2500)
      return
    }

    await setCreateMode(true)

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
      setAlert({
        msg: error.response.data.msg,
        error: true
      })
      setTimeout(() => {
        setAlert({})
      }, 2500) 
    }  
  }
  
  const deleteTask = async (id) => {
    try {
      const { data } = await clientAxios.delete(`/tasks/${id}`)

      const taskUpdated = tasks.filter(taskState => taskState._id !== id)

      console.log(taskUpdated)

      setTasks(taskUpdated)
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true
      })

      setTimeout(() => {
        setAlert({})
      }, 2500)
    }
  }

  const getTask = async (id) => {
    setCreateMode(false)
    setIsOpen(true)

    setId(id)

    try {
      const task = await clientAxios.get(`/tasks/${id}`)
      setName(task.data.task.name)
      setDescription(task.data.task.description)
      setPriority(task.data.task.priority)
    } catch (error){
      console.log(error)
    }
  }

  const editTask = async () => {
    try {
      const { data } = await clientAxios.put(`/tasks/${id}`, { name, description, priority })

      setId('')
      setIsOpen(false)

      const taskUpdatedState = tasks.map(taskState => taskState._id === data.taskUpdated._id ? data.taskUpdated : taskState)
      setTasks(taskUpdatedState)

    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true
      })

      setTimeout(() => {
        setAlert({})
      }, 2500)
    }
  }

  return (
    <TaskContext.Provider
      value={{
        name, setName,
        description, setDescription,
        priority, setPriority,
        createTask,
        isOpen, setIsOpen, createMode, setCreateMode,
        tasks,
        deleteTask, editTask, getTask,
        setId, id
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
