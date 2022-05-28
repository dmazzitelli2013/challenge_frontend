import { HStack, VStack, Text, WarningIcon, Spinner } from 'native-base'
import { FavoriteButton } from '@components/molecules'
import { PriceQuoteSelector } from '@components/organisms'
import { useBreakpoint } from '@hooks'
import { Wallet } from '@services/API/types'
import { useEffect, useState } from 'react'
import { APIToggleFavorite, EtherscanAPIGetETHBalance } from '@services/API'

interface IWalletData {
  data: Wallet
}

const WalletCard = ({ data }: IWalletData) => {
  const { isDesktop } = useBreakpoint()
  const [isBalanceLoading, setBalanceLoading] = useState(true)
  const [balance, setBalance] = useState('0')
  const [isFavoriteLoading, setFavoriteLoading] = useState(false)
  const [isFavorite, setFavorite] = useState(data.isFavorite)

  const updateFavorite = (favorite: boolean) => {
    data.isFavorite = favorite
    setFavorite(favorite)
  }

  const toggleFavorite = async () => {
    setFavoriteLoading(true)
    const result = await APIToggleFavorite(data)
    if (result) {
      updateFavorite(result.isFavorite)
    }
    setFavoriteLoading(false)
  }

  const isOld = (): boolean => {
    if (data.oldestTransactionDate) {
      const transactionDate = new Date(Date.parse(data.oldestTransactionDate))
      const diffTime = new Date().getTime() - transactionDate.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays > 365
    }
    return false
  }

  useEffect(() => {
    ;(async () => {
      setBalance(await EtherscanAPIGetETHBalance(data.address))
      setBalanceLoading(false)
    })()
  }, [])

  return (
    <VStack>
      {isOld() && (
        <HStack
          w="fit-content"
          background="red.200"
          p={1.5}
          ml={2}
          alignItems="center"
          space={2}
          borderTopRadius={12}
          borderBottomRadius={0}
        >
          <WarningIcon color="red.900" size={3} />
          <Text bold color="red.900" fontSize={{ base: 'xs', lg: 'md' }}>
            This wallet is old!
          </Text>
        </HStack>
      )}
      <VStack
        w="100%"
        maxW="1024px"
        h={{ base: '140px', lg: '200px' }}
        background="gray.200"
        borderWidth={1}
        borderColor="gray.300"
        space={2}
        p={4}
        borderRadius={4}
        justifyContent="space-between"
      >
        <HStack space={2} w="100%">
          {isDesktop && (
            <Text fontSize={{ base: 'md', lg: 'xl' }}>Wallet Address:</Text>
          )}
          <Text fontSize={{ base: 'xs', lg: 'xl' }}>{data.address}</Text>
          <HStack flex="auto" justifyContent="flex-end">
            <FavoriteButton
              action={toggleFavorite}
              isLoading={isFavoriteLoading}
              isFavorite={isFavorite}
              size={{ base: 4, lg: 6 }}
              mt={0.5}
            />
          </HStack>
        </HStack>
        {isBalanceLoading ? (
          <Spinner accessibilityLabel="Loading balance" />
        ) : (
          <Text fontSize={{ base: 'xl', lg: '3xl' }} bold alignSelf="center">
            {balance} ETH
          </Text>
        )}
        <PriceQuoteSelector ethBalance={balance} />
      </VStack>
    </VStack>
  )
}

export default WalletCard
