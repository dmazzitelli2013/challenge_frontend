import { Heading, HStack, Spinner, VStack } from 'native-base'
import { useContext } from 'react'
import { WalletCard } from '@components/organisms'
import { AppDataContext } from '@context'

const WalletList = () => {
  const appDataContext = useContext(AppDataContext)
  const { isLoadingWallets, wallets } = appDataContext 

  return (
    <VStack mt={10} space={8} alignItems="center" pb={8}>
      {isLoadingWallets ? (
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading wallets" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
      ) : (
        <>
          {wallets.map((wallet) => (
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
