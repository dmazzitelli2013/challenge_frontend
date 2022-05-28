import { HStack, Select, Text } from 'native-base'
import { useContext, useState } from 'react'
import { AppDataContext } from '@context'

interface IPriceQuoteSelector {
  ethBalance?: string
}

const PriceQuoteSelector = ({ ethBalance }: IPriceQuoteSelector) => {
  const appDataContext = useContext(AppDataContext)
  const { priceQuotes } = appDataContext

  let defaultCurrency = 'USD'
  if (priceQuotes && priceQuotes.length > 0) {
    defaultCurrency = priceQuotes[0].currency
  }

  const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency)

  const getETHPrice = () => {
    const selectedPriceQuote = priceQuotes.find(
      (priceQuote) => priceQuote.currency === selectedCurrency
    )
    return selectedPriceQuote?.price
  }

  const calculateCurrencyBalance = () => {
    const price = getETHPrice()
    if (ethBalance && price) {
      return (parseFloat(ethBalance) * price).toFixed(2)
    }
    return '0'
  }

  const updateSelectedCurrency = (value: string) => {
    setSelectedCurrency(value)
  }

  return (
    <HStack space={4} alignItems="center">
      {priceQuotes.length > 0 && (
        <Select
          minWidth="100px"
          maxWidth="100px"
          mt="1"
          placeholder="Currency"
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
        {calculateCurrencyBalance()} {selectedCurrency}
      </Text>
    </HStack>
  )
}

export default PriceQuoteSelector
