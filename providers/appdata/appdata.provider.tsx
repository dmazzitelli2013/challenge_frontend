import React, { useEffect, useState } from 'react'
import { AppDataContext } from '@context'
import { PriceQuote, Wallet } from '@services/API/types'
import {
  APIAddWallet,
  APIGetETHPriceQuotes,
  APIGetWallets,
  APIUpdatePriceQuote,
} from '@services/API'

const ClientAppDataProvider: React.FC = ({ children }) => {
  const [fetchedWallets, setWallets] = useState([] as Wallet[])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchedPriceQuotes, setPriceQuotes] = useState([] as PriceQuote[])
  const [addWalletIsLoading, setAddWalletIsLoading] = useState(false)

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

  const addWallet = async (address: string) => {
    setAddWalletIsLoading(true)
    const result = await callAPIAddWallet(address)
    if (typeof result !== 'string') {
      const wallets = [result].concat(fetchedWallets)
      setWallets(wallets)
    }
    setAddWalletIsLoading(false)
    return result
  }

  const sortWallets = async (field: string, sort: 'asc' | 'desc') => {
    setIsLoading(true)
    const fetchedData = await APIGetWallets(field, sort)
    setWallets(fetchedData)
    setIsLoading(false)
  }

  const callAPIUpdatePriceQuote = async (id: number, newPrice: number) =>
    APIUpdatePriceQuote(id, newPrice)

  const updatePriceQuote = async (id: number, newPrice: number) => {
    const updatePriceQuotes = fetchedPriceQuotes.map((priceQuote) => {
      if (priceQuote.id === id) {
        const newPriceQuote: PriceQuote = {
          id: priceQuote.id,
          token: priceQuote.token,
          currency: priceQuote.currency,
          price: newPrice,
          createdAt: priceQuote.createdAt,
          updatedAt: priceQuote.updatedAt,
        }
        return newPriceQuote
      }
      return priceQuote
    })
    setPriceQuotes(updatePriceQuotes)
    callAPIUpdatePriceQuote(id, newPrice)
  }

  return (
    <AppDataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isLoadingWallets: isLoading,
        wallets: fetchedWallets,
        priceQuotes: fetchedPriceQuotes,
        addWallet,
        addWalletIsLoading,
        sortWallets,
        updatePriceQuote,
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
