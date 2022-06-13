import '../styles/globals.css'
import Sidebar from './components/siderbar/Sidebar'

function MyApp({ Component, pageProps }) {
  return <>
  
  <Component {...pageProps} />
  </>
}

export default MyApp
