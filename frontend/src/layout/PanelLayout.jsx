import Aside from '../components/todoPanel/Aside'
import Main from '../components/todoPanel/Main'
import TodoAside from '../components/todoPanel/TodoAside'
import useAuthProvider from '../hooks/useAuthProvider'

const PanelLayout = ({ children }) => {
  const { bgImage } = useAuthProvider()

  return (
    <div style={{backgroundImage: `url(${bgImage})`}} className="mid-con bg-panel h-screen w-screen flex px-5 py-5 gap-1">
        <div className="cont-med flex flex-1 gap-5">
          <Aside />
          {children}
          <TodoAside />
        </div>
    </div>
  )
}

export default PanelLayout