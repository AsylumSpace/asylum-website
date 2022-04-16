import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import HeroBanner from "../components/Homepage/HeroBanner";
import Materials from "../components/Homepage/Materials";
import Partners from "../components/Homepage/Partners";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asylum</title>
        <meta name="description" content="Asylum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroBanner />
      <Materials />
      {/*<Partners />*/}

    </div>
  )
}
