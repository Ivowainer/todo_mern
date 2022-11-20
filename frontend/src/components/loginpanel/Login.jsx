import { AiOutlineMail, AiOutlineGoogle, AiOutlineUser } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

import { useEffect } from 'react';
import Link from 'next/link'
import { useState } from 'react'

import Icons from './Icons';
import Input from './Input';
import useAuthProvider from '../../hooks/useAuthProvider';
import Alert from '../Alert';

const Login = () => {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, setLogin, registerUser, setAlert, alert, loginUser } = useAuthProvider()

  useEffect(() => {
    setLogin(true)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
  
    //Comprobaciones
    if(!login && username === ''){
      /* setAlert({
        msg: "Fill all the fields",
        error: true
      })

      setTimeout(() => {
        setAlert({})
      }, 2000) */
      toast.error("Fill all the fields")
      return
    }
    if(!login && username.length < 3){
      /* setAlert({
        msg: "The username must have at least 3 caracters",
        error: true
      })

      setTimeout(() => {
        setAlert({})
      }, 2000) */
      toast.error("The username must have at least 3 caracters")
      return
    }
    if([email, password].includes('')){
      /* setAlert({
        msg: "Fill all the fields",
        error: true
      })

      setTimeout(() => {
        setAlert({})
      }, 2000) */
      toast.error("Fill all the fields")
      return
    }
    if(password.length < 6){
      /* setAlert({
        msg: "The password must have at least 6 characters",
        error: true
      })

      setTimeout(() => {
        setAlert({})
      }, 2000) */
      toast.error("The ppasword must have at least 6 caracters")
      return
    }

    if(!login){
      await registerUser({ username, email, password })

      setUserName('')
      setEmail('')
      setPassword('')
      return
    }

    if(login){
      await loginUser({ email, password })

      setUserName('')
      setEmail('')
      setPassword('')
      return
    }
  }

  return (
    <div className='flex flex-col flex-1 max-w-full px-20 py-20 items-center gap-6'>
        <p className='text-center text-default uppercase font-bold text-3xl'>{login ? "Sign in to todoCW"  : "Sign Up"}</p>

        {/* <div className="flex gap-3">
          <Icons icon={<AiOutlineGoogle />}/>
          <Icons icon={<FaFacebookF />} />
        </div> */}

        {/* <p className='text-sm text-gray-400'>Or use email account</p> */}

        {Object.entries(alert).length != 0 && <Alert />}

        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2'>

          {login ? "" : ( 
            <Input 
              set={(e => setUserName(e.target.value))} 
              value={username} 
              icon={<AiOutlineUser />} 
              type="text" 
              htmlfor="text" 
              placeholder="Username"
            /> 
          )}
          <Input 
            icon={<AiOutlineMail />} 
            set={(e => setEmail(e.target.value))} 
            value={email} 
            type="email" 
            htmlfor="email" 
            placeholder="Email"
          />

          <Input 
            icon={<RiLockPasswordLine />} 
            set={(e => setPassword(e.target.value))} 
            value={password} 
            type="password" 
            htmlfor="password" 
            placeholder="Password"
          />

          {login && <Link href="/"><a className='mb-3 text-sm text-gray-400 underline'>Forgot your password?</a></Link>}

          <input type="submit" value={login ? "Sign In" : "Sign Up"} className='uppercase text-sm tracking-widest cursor-pointer bg-[#00BF96] hover:bg-white text-white hover:text-[#00BF96] hover:border-2 hover:border-[#00BF96] w-full px-5 py-3 rounded-full hover:transition-colors duration-700' />
        </form>
    </div>
  )
}

export default Login