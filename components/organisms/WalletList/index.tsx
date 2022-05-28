import { Heading, HStack, Spinner, VStack } from 'native-base'
import { useEffect, useState } from 'react'
import { WalletCard } from '@components/organisms'
import { APIGetWallets } from '@services/API'
import { Wallet } from '@services/API/types'

interface IWalletList {
  data: Wallet[]
}

const WalletList = ({ data }: IWalletList) => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const fetchedData = await APIGetWallets()
      fetchedData.forEach((wallet) => data.push(wallet))
      setLoading(false)
    })()
  }, [])

  return (
    <VStack mt={12} space={8} alignItems="center" pb={8}>
      {isLoading ? (
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading wallets" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
      ) : (
        <>
          {data.map((wallet) => (
            <WalletCard
              key={wallet.id}
              data={wallet}
            />
          ))}
        </>
      )}
    </VStack>
  )
}

export default WalletList
