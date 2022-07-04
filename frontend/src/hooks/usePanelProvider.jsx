import { useContext } from 'react'
import { PanelContext } from '../context/PanelProvider'

const usePanelProvider = () => {
    return useContext(PanelContext)
}

export default usePanelProvider