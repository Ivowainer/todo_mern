import useAuthProvider from "../../hooks/useAuthProvider"
import Login from "./Login"
import Register from "./Register"

const Panel = () => {
  const { login } = useAuthProvider()

  return (
    <div className='h-full w-full bg-gray-50 rounded-md shadow-2xl'>
      <div className={`flex ${login ? "" : "flex-row-reverse"} h-full md:flex-row flex-col`}>
          <Login />
          <Register />
      </div>
    </div>
  )
}

export default Panel