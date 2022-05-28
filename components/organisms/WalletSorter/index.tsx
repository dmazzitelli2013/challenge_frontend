import { HStack } from 'native-base'
import { WalletSortOption } from '@components/molecules'
import { useState } from 'react'

const options = [
  { title: 'Date Addded', sortKey: 'createdAt' },
  { title: 'Oldest Tx Date', sortKey: 'oldestTransactionDate' },
  { title: 'Favorite', sortKey: 'isFavorite' },
]

const WalletSorter = () => {
  const [sortOption, setSortOption] = useState('')
  return (
    <HStack
      w="100%"
      maxW="640px"
      mt={8}
      p={2}
      justifyContent="space-evenly"
      background="gray.300"
      alignSelf="center"
    >
      {options.map((option) => (
        <WalletSortOption
          title={option.title}
          key={option.sortKey}
          sortKey={option.sortKey}
          currentSortOption={sortOption}
          updateSortOption={setSortOption}
        />
      ))}
    </HStack>
  )
}

export default WalletSorter
