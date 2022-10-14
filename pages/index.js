import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner.js'

export default function Home() {
  console.log( "styles", styles )
  return (
    <div className={ styles.container }>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={ styles.main }>
        <h1 className={ styles.title }>Coffee Connoisseur</h1>
        <Banner />
      </main>

    </div>
  )
}
