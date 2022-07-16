import { createContext, useState, useEffect } from 'react'
import clientAxios from '../helpers/clientAxios'
import useAuthProvider from '../hooks/useAuthProvider'
import { toast } from 'react-toastify';

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
  const [status, setStatus] = useState(false)
  const [navPriority, setNavPriority] = useState('')

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
      toast.error('Fill all the fields')
      return
    }
    if(description.length >= 80){
      toast.error('The maxium of caracters is 80')
      return
    }
    if(name.length < 3){
      toast.error("The minium of caracters is 3")
      return
    }

    await setCreateMode(true)

    try {
      const { data } = await clientAxios.post('/tasks', { name, description, priority })

      setTasks([...tasks, data])

      toast.success("Task created successfully")

      setIsOpen(false)
      setName('')
      setDescription('')
      setPriority('')
    } catch (error) {
      toast.error(error.response?.data?.msg)
    }  
  }
  
  const deleteTask = async (id) => {
    try {
      const { data } = await clientAxios.delete(`/tasks/${id}`)

      const taskUpdated = tasks.filter(taskState => taskState._id !== id)

      setTasks(taskUpdated)
      setId('')
      setIsOpen(false)

      setName('')
      setDescription('')
      setPriority('')

      toast.success('Task deleted')
    } catch (error) {
      toast.error(error.response?.data?.msg)
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
      setStatus(task.data.task.status)
    } catch (error){
      console.log(error)
    }
  }

  const editTask = async () => {
    try {
      const { data } = await clientAxios.put(`/tasks/${id}`, { name, description, priority, status })

      setId('')
      setIsOpen(false)

      const taskUpdatedState = tasks.map(taskState => taskState._id === data.taskUpdated._id ? data.taskUpdated : taskState)
      setTasks(taskUpdatedState)

      setName('')
      setDescription('')
      setPriority('')
      setStatus(false)
    } catch (error) {
      toast.error(error.response?.data?.msg)
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
        setStatus, status,
        setId, id,
        setNavPriority, navPriority
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
