import APIConfig from '@constants/api.constants'
import { Wallet } from './types'

export const APIGetWallets = async (): Promise<Wallet[]> => {
  const fullURL = `${APIConfig.API_URL}/wallets`
  return fetch(fullURL).then((response) => response.json())
}
