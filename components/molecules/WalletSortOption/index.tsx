import { useContext, useState } from 'react'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  HStack,
  Pressable,
  Text,
  VStack,
} from 'native-base'
import { AppDataContext } from '@context'

interface IWalletSortOptionProps {
  title: string
  sortKey: string
  currentSortOption: string
  updateSortOption(key: string): any
}

const WalletSortState = {
  DEFAULT: 0,
  DOWN: 1,
  UP: 2,
}

const WalletSortOption = ({
  title,
  sortKey,
  currentSortOption,
  updateSortOption,
}: IWalletSortOptionProps) => {
  const appDataContext = useContext(AppDataContext)
  const { sortWallets } = appDataContext
  const [state, setState] = useState(WalletSortState.DEFAULT)

  const isCurrentSortOption = (): boolean => currentSortOption === sortKey

  const isStateUp = (): boolean => {
    if (!isCurrentSortOption()) {
      return false
    }
    return state === WalletSortState.UP
  }

  const isStateDown = (): boolean => {
    if (!isCurrentSortOption()) {
      return false
    }
    return state === WalletSortState.DOWN
  }

  const callSortWallets = (nextState: number) => {
    if (nextState === WalletSortState.DEFAULT) return
    sortWallets(sortKey, nextState === WalletSortState.DOWN ? 'desc' : 'asc')
  }

  const triggerSort = () => {
    let currentState = 0
    if (!isCurrentSortOption()) {
      currentState = WalletSortState.DEFAULT
    } else {
      currentState = state
    }
    let nextState = currentState + 1
    if (nextState > WalletSortState.UP) nextState = WalletSortState.DOWN
    setState(nextState)
    callSortWallets(nextState)
    updateSortOption(sortKey)
  }

  return (
    <Pressable onPress={triggerSort}>
      <HStack space={2} alignItems="center">
        <Text fontSize={{ base: 'sm', lg: 'md' }}>{title}</Text>
        <VStack>
          <ChevronUpIcon opacity={isStateDown() ? 0 : 1} />
          <ChevronDownIcon opacity={isStateUp() ? 0 : 1} />
        </VStack>
      </HStack>
    </Pressable>
  )
}

export default WalletSortOption
