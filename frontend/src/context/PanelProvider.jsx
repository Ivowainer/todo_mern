import { useState, createContext } from 'react'

export const PanelContext = createContext()

const PanelProvider = ({ children }) => {
    const [login, setLogin] = useState(false)

    return (
        <PanelContext.Provider
            value={{
                login,
                setLogin
            }}
        >
            {children}
        </PanelContext.Provider>
    )
}

export default PanelProvider