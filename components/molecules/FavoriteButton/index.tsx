import { useState } from 'react'
import { IIconProps, Pressable, FavouriteIcon } from 'native-base'

const FavoriteButton = ({ size, mt, ...props }: IIconProps) => {
  const [isFavorite, setFavorite] = useState(false)
  const toggleIsFavorite = () => setFavorite(!isFavorite)
  return (
    <Pressable onPress={toggleIsFavorite}>
      <FavouriteIcon size={size} mt={mt} {...props} color={isFavorite ? "red.600" : "white"} />
    </Pressable>
  )
}

export default FavoriteButton
