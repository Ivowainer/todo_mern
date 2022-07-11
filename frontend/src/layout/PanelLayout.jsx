import Aside from '../components/todoPanel/Aside'
import Main from '../components/todoPanel/Main'
import TodoAside from '../components/todoPanel/TodoAside'

const PanelLayout = ({ children }) => {
  return (
    <div className='mid-con bg-panel h-screen w-screen flex px-5 py-5 gap-1'>
        <div className="cont-med flex flex-1 gap-5">
          <Aside />
          {children}
          <TodoAside />
        </div>
    </div>
  )
}

export default PanelLayout