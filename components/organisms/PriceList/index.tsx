import { PriceBox } from '@components/molecules'
import { AppDataContext } from '@context'
import { HStack, Text, VStack } from 'native-base'
import { useContext } from 'react'

const PriceList = () => {
  const appDataContext = useContext(AppDataContext)
  const { priceQuotes } = appDataContext

  const getETHPriceQuote = (currency: string) =>
    priceQuotes.find((priceQuote) => priceQuote.currency === currency)

  return (
    <VStack
      mt={8}
      w="90%"
      maxW="640px"
      background="gray.300"
      borderRadius={4}
      borderColor="gray.400"
      borderWidth={1}
      alignItems="center"
      alignSelf="center"
      space={2}
      p={2}
    >
      <Text fontSize={{ base: 'md', lg: 'xl' }} bold>
        ETH Price
      </Text>
      <HStack space={2} w="full">
        <PriceBox priceQuote={getETHPriceQuote('USD')} />
        <PriceBox priceQuote={getETHPriceQuote('EUR')} />
      </HStack>
    </VStack>
  )
}

export default PriceList
