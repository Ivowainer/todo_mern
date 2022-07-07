import AuthProvider from '../context/AuthProvider'
import TaskProvider from '../context/TaskProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <TaskProvider>
        <Component {...pageProps} />
      </TaskProvider>
    </AuthProvider>
  )
}

export default MyApp
