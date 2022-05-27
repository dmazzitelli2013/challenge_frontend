import { Heading, HStack, Spinner, VStack } from 'native-base'
import { useEffect, useState } from 'react'
import { WalletCard } from '@components/organisms'
import { APIGetWallets } from '@services/API'
import { Wallet } from '@services/API/types'

let data: Wallet[] = []

const WalletList = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      data = await APIGetWallets()
      setLoading(false)
    })()
  }, [])

  return (
    <VStack mt={12} space={8} alignItems="center" pb={8}>
      {isLoading ? (
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
      ) : (
        <>
          {data.map((wallet) => (
            <WalletCard key={wallet.id} data={wallet} />
          ))}
        </>
      )}
    </VStack>
  )
}

export default WalletList
