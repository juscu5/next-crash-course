import Navbar from '../Components/Navbar'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Navbar></Navbar>
        <Component {...pageProps} />
    </div>        
  )
}

export default MyApp
