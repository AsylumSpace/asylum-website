import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asylum</title>
        <meta name="description" content="Asylum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
