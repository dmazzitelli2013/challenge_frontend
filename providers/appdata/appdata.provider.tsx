import React, { useEffect, useState } from 'react'
import { AppDataContext } from '@context'
import { PriceQuote, Wallet } from '@services/API/types'
import { APIGetETHPriceQuotes, APIGetWallets } from '@services/API'

const ClientAppDataProvider: React.FC = ({ children }) => {
  const [fetchedWallets, setWallets] = useState([] as Wallet[])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchedPriceQuotes, setPriceQuotes] = useState([] as PriceQuote[])

  useEffect(() => {
    ;(async () => {
      const fetchedData = await APIGetWallets()
      setWallets(fetchedData)
      setIsLoading(false)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const data = await APIGetETHPriceQuotes()
      setPriceQuotes(data)
    })()
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppDataContext.Provider value={{ isLoadingWallets: isLoading, wallets: fetchedWallets, priceQuotes: fetchedPriceQuotes }}>
      {children}
    </AppDataContext.Provider>
  )
}

const AppDataProvider = (props: any) => {
  if (typeof window === 'undefined') return null
  return <ClientAppDataProvider {...props} />
}

export default AppDataProvider
