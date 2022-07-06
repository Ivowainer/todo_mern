import Aside from '../components/todoPanel/Aside'
import Main from '../components/todoPanel/Main'

const PanelLayout = ({ children }) => {
  return (
    <div className='bg-panel h-screen w-screen'>
      <div className="h-full flex-col px-5 py-5 flex gap-3">
          <h1 className="uppercase font-bold text-white m-10 text-3xl">todocw</h1>
          <div className="flex h-full w-full px-5  gap-5">
            <Aside />
            {children}
          </div>
      </div>
    </div>
  )
}

export default PanelLayout