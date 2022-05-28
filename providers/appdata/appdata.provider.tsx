import React, { useEffect, useState } from 'react'
import { AppDataContext } from '@context'
import { PriceQuote } from '@services/API/types'
import { APIGetETHPriceQuotes } from '@services/API'

const ClientAppDataProvider: React.FC = ({ children }) => {
  const [fetchedPriceQuotes, setPriceQuotes] = useState([] as PriceQuote[])

  useEffect(() => {
    ;(async () => {
      const data = await APIGetETHPriceQuotes()
      setPriceQuotes(data)
    })()
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppDataContext.Provider value={{ priceQuotes: fetchedPriceQuotes }}>
      {children}
    </AppDataContext.Provider>
  )
}

const AppDataProvider = (props: any) => {
  if (typeof window === 'undefined') return null
  return <ClientAppDataProvider {...props} />
}

export default AppDataProvider
