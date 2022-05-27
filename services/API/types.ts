interface Wallet {
  id: number
  address: string
  oldestTransactionDate?: Date
  isFavorite: boolean
  createdAt: Date
  updatedAt: Date
  balance?: string
}

export type { Wallet }
