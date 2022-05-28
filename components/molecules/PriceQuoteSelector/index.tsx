import { HStack, Select, Text } from 'native-base'
import { useContext, useState } from 'react'
import { AppDataContext } from '@context'

const PriceQuoteSelector = () => {
  const appDataContext = useContext(AppDataContext)
  const { priceQuotes } = appDataContext

  let defaultCurrency = 'USD'
  if (priceQuotes && priceQuotes.length > 0) {
    defaultCurrency = priceQuotes[0].currency
  }
  const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency)
  const [balance, setBalance] = useState(0)

  const updateSelectedCurrency = (value: string) => {
    setSelectedCurrency(value)
    setBalance(100)
  }

  return (
    <HStack space={4} alignItems="center">
      {priceQuotes.length > 0 && (
        <Select
          minWidth="100px"
          maxWidth="100px"
          mt="1"
          selectedValue={selectedCurrency}
          onValueChange={updateSelectedCurrency}
        >
          {priceQuotes?.map((priceQuote) => (
            <Select.Item
              key={priceQuote.id}
              label={priceQuote.currency}
              value={priceQuote.currency}
            />
          ))}
        </Select>
      )}
      <Text fontSize={{ base: 'md', lg: 'xl' }} bold>
        {balance} {selectedCurrency}
      </Text>
    </HStack>
  )
}

export default PriceQuoteSelector
