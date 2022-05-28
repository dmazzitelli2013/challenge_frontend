import { useContext, useState } from 'react'
import {
  VStack,
  Text,
  HStack,
  IconButton,
  AddIcon,
  CheckIcon,
  CloseIcon,
  Input,
} from 'native-base'
import { AppDataContext } from '@context'
import { PriceQuote } from '@services/API/types'

interface IPriceBoxProps {
  priceQuote?: PriceQuote
}

const iconSize = {
  base: 2,
  lg: 4,
}

const PriceBox = ({ priceQuote }: IPriceBoxProps) => {
  const appDataContext = useContext(AppDataContext)
  const { updatePriceQuote } = appDataContext
  const [isEditing, setEditing] = useState(false)
  const [editValue, setEditValue] = useState(0)

  const edit = () => {
    setEditValue(priceQuote?.price || 0)
    setEditing(true)
  }

  const cancelEdit = () => {
    setEditing(false)
    setEditValue(priceQuote?.price || 0)
  }

  const save = () => {
    if (priceQuote) {
      const number = parseFloat(parseFloat(editValue.toString()).toFixed(2))
      updatePriceQuote(priceQuote.id, number)
    }
    setEditing(false)
  }

  const validNumber = /^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/
  const handleChange = (event: any) => {
    if (validNumber.test(event.target.value)) {
      setEditValue(event.target.value)
    }
  }

  return (
    <VStack
      background="gray.200"
      p={2}
      borderRadius={4}
      borderColor="gray.400"
      borderWidth={1}
      flex={1}
    >
      {isEditing ? (
        <Input
          fontSize={{ base: 'md', lg: 'xl' }}
          value={editValue.toString()}
          onChange={handleChange}
        />
      ) : (
        <Text fontSize={{ base: 'md', lg: 'xl' }} bold>
          {priceQuote?.price}
        </Text>
      )}
      <HStack alignItems="center">
        <Text w="full" fontSize={{ base: 'md', lg: 'xl' }} bold>
          {priceQuote?.currency}
        </Text>
        {isEditing ? (
          <>
            <IconButton
              key="cancel"
              icon={<CloseIcon size={iconSize} />}
              onPress={cancelEdit}
            />
            <IconButton
              key="confirm"
              icon={<CheckIcon size={iconSize} />}
              onPress={save}
            />
          </>
        ) : (
          <IconButton icon={<AddIcon size={iconSize} />} onPress={edit} />
        )}
      </HStack>
    </VStack>
  )
}

export default PriceBox
