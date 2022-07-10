import '../../styles/globals.css';
import Head from 'next/head';
import Layout from 'components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tailwind Some Works</title>
        <meta name="description" content="Tailwind Some Works" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
