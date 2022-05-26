import type { NextPage } from 'next'
import { ReactNode } from 'react'
import { VStack, HStack, Input, Text, Button } from 'native-base'
import { BaseLayout } from '@components/templates'
import { useBreakpoint } from '@hooks'
import { WalletContainer } from '@components/organisms'

interface IAddWalletWrapper {
  children: ReactNode
  isDesktop: boolean
}

const AddWalletWrapper = ({ children, isDesktop }: IAddWalletWrapper) => {
  if (isDesktop)
    return (
      <HStack
        py={12}
        space={2}
        background="white"
        justifyContent="center"
        alignItems="center"
        position="sticky"
        top={0}
        zIndex={1}
      >
        {children}
      </HStack>
    )
  return <VStack space={2}>{children}</VStack>
}

const Home: NextPage = () => {
  const { isDesktop } = useBreakpoint()
  return (
    <BaseLayout>
      <AddWalletWrapper isDesktop={isDesktop || false}>
        <Text fontSize={{ base: 'xs', lg: 'md' }}>Wallet Address</Text>
        <Input
          fontSize={{ base: 'xs', lg: 'md' }}
          placeholder="0x0..."
          w="400px"
          maxW="100%"
        />
        <Button maxW="200px" fontSize={{ base: 'xs', lg: 'md' }}>
          Add Wallet
        </Button>
      </AddWalletWrapper>
      <VStack mt={12} space={8} alignItems="center" pb={8}>
        <WalletContainer />
        <WalletContainer />
        <WalletContainer />
        <WalletContainer />
        <WalletContainer />
        <WalletContainer />
        <WalletContainer />
        <WalletContainer />
        <WalletContainer />
        <WalletContainer />
      </VStack>
    </BaseLayout>
  )
}

export default Home
