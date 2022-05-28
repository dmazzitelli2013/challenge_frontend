import { createContext } from 'react'
import { PriceQuote } from '@services/API/types'

interface IAppDataContextValue {
  priceQuotes: PriceQuote[]
}

const defaultValue: IAppDataContextValue = {
  priceQuotes: []
}

const AppDataContext = createContext<IAppDataContextValue>(defaultValue)

export default AppDataContext
