import type { NextPage } from 'next'
import { ReactNode, useContext, useState } from 'react'
import { VStack, HStack, Input, Text, Button, Spinner } from 'native-base'
import { BaseLayout } from '@components/templates'
import { PriceList, WalletList, WalletSorter } from '@components/organisms'
import { useBreakpoint } from '@hooks'
import { AppDataContext } from '@context'

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
        alignItems="baseline"
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
  const appDataContext = useContext(AppDataContext)
  const { addWallet, addWalletIsLoading } = appDataContext
  const { isDesktop } = useBreakpoint()
  const [walletValue, setWalletValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const showErrorMessage = errorMessage.length > 0
  const handleChange = (event: any) => setWalletValue(event.target.value)

  const addNewWallet = async () => {
    const response = await addWallet(walletValue)
    if (typeof response === 'string') {
      setErrorMessage(response)
    } else {
      setErrorMessage('')
    }
  }

  return (
    <BaseLayout>
      <AddWalletWrapper isDesktop={isDesktop || false}>
        <Text fontSize={{ base: 'xs', lg: 'md' }}>Wallet Address</Text>
        <VStack>
          <Input
            fontSize={{ base: 'xs', lg: 'md' }}
            placeholder="0x0..."
            w="400px"
            maxW="100%"
            value={walletValue}
            onChange={handleChange}
          />
          {showErrorMessage && <Text color="red.600">{errorMessage}</Text>}
        </VStack>
        {addWalletIsLoading ? (
          <Spinner accessibilityLabel="Loading wallet" />
        ) : (
          <Button
            maxW="200px"
            fontSize={{ base: 'xs', lg: 'md' }}
            onPress={addNewWallet}
            disabled={walletValue.length === 0}
          >
            Add Wallet
          </Button>
        )}
      </AddWalletWrapper>
      <PriceList />
      <WalletSorter />
      <WalletList />
    </BaseLayout>
  )
}

export default Home
