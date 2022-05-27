interface Wallet {
  id: number
  address: string
  oldestTransactionDate?: Date
  isFavorite: boolean
  createdAt: Date
  updatedAt: Date
}

export type { Wallet }
