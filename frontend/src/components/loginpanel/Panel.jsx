import Login from "./Login"
import Register from "./Register"

const Panel = () => {
  return (
    <div className='h-full w-full bg-gray-50 rounded-md shadow-2xl'>
      <div className="flex h-full">
          <Login />
          <Register />
      </div>
    </div>
  )
}

export default Panel