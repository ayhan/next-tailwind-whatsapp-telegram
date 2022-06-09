import '../../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
      <title>Tailwind Some Works</title>
      <meta name="description" content="Tailwind Some Works" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
