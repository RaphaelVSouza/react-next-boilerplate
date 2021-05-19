import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/ico-192.png" />
        <link rel="apple-touch-icon" href="/img/ico-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, ReactJS, NextJS and Styled Components"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default App
