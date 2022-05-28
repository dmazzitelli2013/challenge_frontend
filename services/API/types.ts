interface Wallet {
  id: number
  address: string
  oldestTransactionDate?: string
  isFavorite: boolean
  createdAt: string
  updatedAt: string
  balance?: string
}

interface PriceQuote {
  id: number
  token: string
  currency: string
  price: number
  createdAt: string
  updatedAt: string
}

export type { Wallet, PriceQuote }
