import AuthProvider from '../context/AuthProvider'
import TaskProvider from '../context/TaskProvider'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <TaskProvider>
        <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
          <Component {...pageProps} />
        <ToastContainer />
      </TaskProvider>
    </AuthProvider>
  )
}

export default MyApp
