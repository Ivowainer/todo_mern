import { useContext } from 'react'
import { TaskContext } from '../context/TaskProvider'

const useTaskProvider = () => {
    return useContext(TaskContext)
}

export default useTaskProvider