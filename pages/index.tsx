import type { NextPage } from 'next'
import { VStack, HStack, Input, Text, Button } from 'native-base'
import { BaseLayout } from '@components/templates'

const Home: NextPage = () => (
  <BaseLayout>
    <VStack>
      <HStack space={2}>
        <Text fontSize="md">Wallet Address</Text>
        <Input w={64} fontSize="md" />
      </HStack>
      <HStack mt={4}>
        <Button>Add Wallet</Button>
      </HStack>
    </VStack>
  </BaseLayout>
)

export default Home
