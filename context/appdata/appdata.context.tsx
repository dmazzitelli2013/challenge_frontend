import { createContext } from 'react'
import { PriceQuote, Wallet } from '@services/API/types'

interface IAppDataContextValue {
  isLoadingWallets: boolean
  wallets: Wallet[]
  priceQuotes: PriceQuote[]
  addWallet(address: string): any
  addWalletIsLoading: boolean
}

const defaultValue: IAppDataContextValue = {
  isLoadingWallets: true,
  wallets: [],
  priceQuotes: [],
  addWallet: () => {},
  addWalletIsLoading: false
}

const AppDataContext = createContext<IAppDataContextValue>(defaultValue)

export default AppDataContext
