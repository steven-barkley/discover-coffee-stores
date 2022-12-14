import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner.js'

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log( "hi banner button" );
  }
  return (
    <div className={ styles.container }>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="This site's title" key="title" />
      </Head>
      <main className={ styles.main }>

        <Banner buttonText="View stores nearby" handleOnClick={ handleOnBannerBtnClick } />
      </main>

    </div>
  )
}
