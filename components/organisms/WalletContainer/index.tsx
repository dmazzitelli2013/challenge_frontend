import { HStack, VStack, Text } from 'native-base'

const WalletContainer = () => (
  <VStack
    w="100%"
    maxW="1024px"
    h={{ base: '140px', lg: '200px' }}
    background="gray.200"
    space={2}
    p={4}
    borderRadius={4}
    display="flex"
    justifyContent="space-between"
  >
    <HStack space={2}>
      <Text
        fontSize={{ base: 'md', lg: 'xl' }}
        display={{ base: 'none', lg: 'block' }}
      >
        Wallet Address:
      </Text>
      <Text fontSize={{ base: 'xs', lg: 'xl' }}>
        0x75810fd7c43D9357696E45652C5DFc92D06925C2
      </Text>
    </HStack>
    <Text fontSize={{ base: 'xl', lg: '3xl' }} bold alignSelf="center">
      2.72 ETH
    </Text>
    <HStack>
      <Text>USD / EUR</Text>
    </HStack>
  </VStack>
)

export default WalletContainer
