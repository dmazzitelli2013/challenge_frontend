import React, { useEffect, useState } from 'react'
import { AppDataContext } from '@context'
import { PriceQuote, Wallet } from '@services/API/types'
import {
  APIAddWallet,
  APIGetETHPriceQuotes,
  APIGetWallets,
} from '@services/API'

const ClientAppDataProvider: React.FC = ({ children }) => {
  const [fetchedWallets, setWallets] = useState([] as Wallet[])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchedPriceQuotes, setPriceQuotes] = useState([] as PriceQuote[])
  const [addWalletLoading, setAddWalletLoading] = useState(false)

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

  const callAPIAddWallet = async (address: string) => {
    const response = await APIAddWallet(address)
    if ('message' in response) {
      if (Array.isArray(response.message) && response.message.length > 0) {
        return response.message[0]
      }
      return response.message
    }
    return response
  }

  const addNewWallet = async (address: string) => {
    setAddWalletLoading(true)
    const result = await callAPIAddWallet(address)
    if (typeof result !== 'string') {
      const wallets = [result].concat(fetchedWallets)
      setWallets(wallets)
    }
    setAddWalletLoading(false)
    return result
  }

  return (
    <AppDataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isLoadingWallets: isLoading,
        wallets: fetchedWallets,
        priceQuotes: fetchedPriceQuotes,
        addWallet: addNewWallet,
        addWalletIsLoading: addWalletLoading,
      }}
    >
      {children}
    </AppDataContext.Provider>
  )
}

const AppDataProvider = (props: any) => {
  if (typeof window === 'undefined') return null
  return <ClientAppDataProvider {...props} />
}

export default AppDataProvider
