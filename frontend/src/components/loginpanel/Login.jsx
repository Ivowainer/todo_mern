import { AiOutlineMail, AiOutlineGoogle, AiOutlineUser } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';

import { useEffect } from 'react';

import Link from 'next/link'

import Icons from './Icons';
import Input from './Input';
import useAuthProvider from '../../hooks/useAuthProvider';

const Login = () => {

  const { login, setLogin } = useAuthProvider()

  useEffect(() => {
    setLogin(true)
  }, [])

  return (
    <div className='flex flex-col flex-1 max-w-full px-20 py-20 items-center gap-6'>
        <p className='text-center text-default uppercase font-bold text-3xl'>{login ? "Sign in to todoCW"  : "Sign Up"}</p>

        <div className="flex gap-3">
          <Icons icon={<AiOutlineGoogle />}/>
          <Icons icon={<FaFacebookF />} />
        </div>

        <p className='text-sm text-gray-400'>Or use email account</p>

        <form className='flex flex-col items-center gap-2'>
          {login ? "" : <Input icon={<AiOutlineUser />} type="text" htmlfor="text" placeholder="Username"/>}
          <Input icon={<AiOutlineMail />} type="email" htmlfor="email" placeholder="Email"/>
          <Input icon={<RiLockPasswordLine />} type="password" htmlfor="password" placeholder="Password"/>

          {login && <Link href="/"><a className='mb-3 text-sm text-gray-400 underline'>Forgot your password?</a></Link>}

          <input type="submit" value={login ? "Sign In" : "Sign Up"} className='uppercase text-sm tracking-widest cursor-pointer bg-[#00BF96] hover:bg-white text-white hover:text-[#00BF96] hover:border-2 hover:border-[#00BF96] w-full px-5 py-3 rounded-full hover:transition-colors duration-700' />
        </form>
    </div>
  )
}

export default Login