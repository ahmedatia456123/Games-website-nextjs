import '../styles/globals.css'
import { Fragment } from 'react'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'
import classes from '../styles/main.module.css'
function MyApp({ Component, pageProps }) {
  return <Fragment>
    <div className={classes.container}>
    <Header />
      <div className='siteContainer'>
        <main className='siteMain'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  </Fragment>
}

export default MyApp
