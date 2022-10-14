import '../styles/globals.css'
import { Fragment } from 'react'


function MyApp( { Component, pageProps } ) {
  return <Fragment>
    <Component { ...pageProps } />
    <footer>
      <p>© 2018 Steven</p>
    </footer>
  </Fragment>
}


export default MyApp
