import { createContext } from 'react'
import { PriceQuote, Wallet } from '@services/API/types'

interface IAppDataContextValue {
  isLoadingWallets: boolean
  wallets: Wallet[]
  priceQuotes: PriceQuote[]
  addWallet(address: string): any
  addWalletIsLoading: boolean
  updatePriceQuote(id: number, value: number): any
}

const defaultValue: IAppDataContextValue = {
  isLoadingWallets: true,
  wallets: [],
  priceQuotes: [],
  addWallet: () => {},
  addWalletIsLoading: false,
  updatePriceQuote: () => {}
}

const AppDataContext = createContext<IAppDataContextValue>(defaultValue)

export default AppDataContext
