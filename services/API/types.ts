interface Wallet {
  id: number
  address: string
  oldestTransactionDate?: string
  isFavorite: boolean
  createdAt: Date
  updatedAt: Date
  balance?: string
}

export type { Wallet }
