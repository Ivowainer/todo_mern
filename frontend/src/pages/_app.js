import PanelProvider from '../context/PanelProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <PanelProvider>
      <Component {...pageProps} />
    </PanelProvider>
  )
}

export default MyApp
