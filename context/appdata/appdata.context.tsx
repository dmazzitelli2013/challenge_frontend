import { createContext } from 'react'
import { PriceQuote, Wallet } from '@services/API/types'

interface IAppDataContextValue {
  isLoadingWallets: boolean
  wallets: Wallet[]
  priceQuotes: PriceQuote[]
  addWallet(address: string): any
  addWalletIsLoading: boolean
  sortWallets(field: string, sort: 'asc' | 'desc'): any
  updatePriceQuote(id: number, value: number): any
}

const defaultValue: IAppDataContextValue = {
  isLoadingWallets: true,
  wallets: [],
  priceQuotes: [],
  addWallet: () => {},
  addWalletIsLoading: false,
  sortWallets: () => {},
  updatePriceQuote: () => {}
}

const AppDataContext = createContext<IAppDataContextValue>(defaultValue)

export default AppDataContext
