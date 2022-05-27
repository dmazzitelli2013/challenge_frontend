import type { NextPage } from 'next'
import { ReactNode } from 'react'
import { VStack, HStack, Input, Text, Button } from 'native-base'
import { BaseLayout } from '@components/templates'
import { WalletList } from '@components/organisms'
import { useBreakpoint } from '@hooks'

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
      <WalletList />
    </BaseLayout>
  )
}

export default Home
