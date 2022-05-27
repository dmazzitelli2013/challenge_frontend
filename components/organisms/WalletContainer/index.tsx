import { HStack, VStack, Text, WarningIcon } from 'native-base'
import { FavoriteButton } from '@components/molecules'
import { useBreakpoint } from '@hooks'

const WalletContainer = () => {
  const { isDesktop } = useBreakpoint()
  return (
    <VStack>
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
          <Text fontSize={{ base: 'xs', lg: 'xl' }}>
            0x75810fd7c43D9357696E45652C5DFc92D06925C2
          </Text>
          <HStack flex="auto" justifyContent="flex-end">
            <FavoriteButton size={{ base: 4, lg: 6 }} mt={0.5} />
          </HStack>
        </HStack>
        <Text fontSize={{ base: 'xl', lg: '3xl' }} bold alignSelf="center">
          2.72 ETH
        </Text>
        <HStack>
          <Text>USD / EUR</Text>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default WalletContainer
