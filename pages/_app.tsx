import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NativeBaseProvider } from 'native-base'
import { useEffect, useState } from 'react'
import { BreakpointProvider } from '@providers'
import AppDataProvider from '@providers/appdata/appdata.provider'

const styleObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
}

const App = ({ Component, pageProps }: AppProps) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      <Head>
        <title>Challenge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NativeBaseProvider>
        {loaded ? (
          <BreakpointProvider>
            <AppDataProvider>
              <Component {...pageProps} />
            </AppDataProvider>
          </BreakpointProvider>
        ) : (
          <div style={styleObject}>
            <p>Loading</p>
          </div>
        )}
      </NativeBaseProvider>
    </>
  )
}

export default App
