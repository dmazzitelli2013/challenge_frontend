import { IIconProps, Pressable, FavouriteIcon, Spinner } from 'native-base'

interface IFavoriteButtonProps extends IIconProps {
  action?: any
  isLoading: boolean
  isFavorite: boolean
}

const FavoriteButton = ({
  action,
  isLoading,
  isFavorite,
  size,
  mt,
  ...props
}: IFavoriteButtonProps) => (
  <Pressable onPress={action} size={size}>
    {isLoading ? (
      <Spinner accessibilityLabel="Loading favorite" />
    ) : (
      <FavouriteIcon
        size={size}
        mt={mt}
        {...props}
        color={isFavorite ? 'red.600' : 'white'}
      />
    )}
  </Pressable>
)

export default FavoriteButton
