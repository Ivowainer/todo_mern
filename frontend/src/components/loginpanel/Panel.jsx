import { useState } from 'react'

import useAuthProvider from "../../hooks/useAuthProvider"
import Login from "./Login"
import Register from "./Register"

const Panel = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState({})

  const { login, registerUser } = useAuthProvider()



  return (
    <div className='h-full w-full bg-gray-50 rounded-md shadow-2xl'>
      <div className={`flex ${login ? "" : "flex-row-reverse"} h-full`}>
          <Login />
          <Register />
      </div>
    </div>
  )
}

export default Panel