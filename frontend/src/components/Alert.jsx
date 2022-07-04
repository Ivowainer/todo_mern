import useAuthProvider from "../hooks/useAuthProvider"

const Alert = () => { 
    const { alert } = useAuthProvider()

    return (
        <div className={`${alert.error && "bg-red-500" } bg-default text-white font-bold text-sm px-10 py-2 rounded-md`}>
            <p>{alert.msg}</p>
        </div>
    )
}

export default Alert