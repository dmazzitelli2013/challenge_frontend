import { ReactNode } from 'react'
import { VStack, View } from 'native-base'

export interface IBaseLayoutProps {
  children?: ReactNode
}

const BaseLayout = ({ children }: IBaseLayoutProps) => (
  <VStack justifyContent="center" alignItems="center" w="100vw" h="100vh" overflowX="hidden">
    <View flex={2} w="100%" p={6} maxW="1520px">
      {children}
    </View>
  </VStack>
)

export default BaseLayout
