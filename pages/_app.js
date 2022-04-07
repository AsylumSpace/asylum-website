import '../styles/globals.scss'
import Layout from "../components/BaseLayout/Layout";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Head>
          <title>Supercolony</title>
          {/*<link href={`/fonts/fonts.css`} rel="stylesheet"/>*/}
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
