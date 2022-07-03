import { AiOutlineMail, AiOutlineGoogle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';

import Link from 'next/link'

import Icons from './Icons';
import Input from './Input';

const Login = () => {
  return (
    <div className='flex flex-col flex-1 max-w-full px-20 py-20 items-center gap-6'>
        <p className='text-center text-default uppercase font-bold text-3xl'>Sign in to todoCW</p>

        <div className="flex gap-3">
          <Icons icon={<AiOutlineGoogle />}/>
          <Icons icon={<FaFacebookF />} />
        </div>

        <p className='text-sm text-gray-400'>Or use email account</p>

        <form className='flex flex-col items-center gap-2'>
          <Input icon={<AiOutlineMail />} type="email" htmlfor="email" placeholder="Email"/>
          <Input icon={<RiLockPasswordLine />} type="password" htmlfor="password" placeholder="Password"/>

          <Link href="/"><a className='mb-3 text-sm text-gray-400 underline'>Forgot your password?</a></Link>

          <input type="submit" value="Sign In" className='uppercase text-sm tracking-widest cursor-pointer bg-[#00BF96] hover:bg-white text-white hover:text-[#00BF96] hover:border-2 hover:border-[#00BF96] w-full px-5 py-3 rounded-full hover:transition-colors duration-700' />
        </form>
    </div>
  )
}

export default Login