import Layout from '../Components/Layout'
import '../styles/globals.css'
import { StateContext } from '../context/StateManagement'

function MyApp({ Component, pageProps }) {
  return(
    <StateContext>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </StateContext>
  ) 
}

export default MyApp
