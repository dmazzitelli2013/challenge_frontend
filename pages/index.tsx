import type { NextPage } from 'next'
import { ReactNode, useState } from 'react'
import { VStack, HStack, Input, Text, Button, Spinner } from 'native-base'
import { BaseLayout } from '@components/templates'
import { WalletList } from '@components/organisms'
import { useBreakpoint } from '@hooks'
import { APIAddWallet } from '@services/API'
import { Wallet } from '@services/API/types'

interface IAddWalletWrapper {
  children: ReactNode
  isDesktop: boolean
}

const data: Wallet[] = []

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
  const { isDesktop } = useBreakpoint()
  const [walletValue, setWalletValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setLoading] = useState(false)

  const showErrorMessage = errorMessage.length > 0
  const handleChange = (event: any) => setWalletValue(event.target.value)

  const addWallet = async () => {
    setLoading(true)
    const response = await APIAddWallet(walletValue)
    if ('message' in response) {
      if (Array.isArray(response.message) && response.message.length > 0) {
        setErrorMessage(response.message[0])
      } else {
        setErrorMessage(response.message)
      }
    } else {
      data.unshift(response)
      setWalletValue('')
      setErrorMessage('')
    }
    setLoading(false)
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
        {isLoading ? (
          <Spinner accessibilityLabel="Loading wallet" />
        ) : (
          <Button
            maxW="200px"
            fontSize={{ base: 'xs', lg: 'md' }}
            onPress={addWallet}
            disabled={walletValue.length === 0}
          >
            Add Wallet
          </Button>
        )}
      </AddWalletWrapper>
      <WalletList data={data} />
    </BaseLayout>
  )
}

export default Home
