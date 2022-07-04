import Link from 'next/link'
import useAuthProvider from '../../hooks/useAuthProvider'

const Register = () => {
  const { login } = useAuthProvider()

  return (
    <div className='bg-login px-20 h-full flex flex-col gap-5 justify-center items-center text-center py-10 text-white'>
      <p className='font-bold text-4xl'>{login ? 'New Here?' : 'Welcome back!'}</p>
      {login ? <p>Sign Up and discover a <br /> great amount of opportunities!</p> : ""} 

      <Link href={login ? "/register" : "/"}><a className='hover:text-white text-default bg-white hover:bg-inherit transition-colors hover:border-white hover:border-2 w-3/4 rounded-full px-5 py-3 uppercase tracking-wider text-sm duration-500'>{login ? "Sign Up" : "Sign In"}</a></Link>
    </div>
  )
}

export default Register