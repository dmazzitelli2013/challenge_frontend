import APIConfig from '@constants/api.constants'
import { Wallet } from './types'

const APIAddWallet = async (inputAddress: string): Promise<Wallet | Error> => {
  const fullURL = `${APIConfig.API_URL}/wallets`
  return fetch(fullURL, {
    method: 'POST',
    body: JSON.stringify({ address: inputAddress }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => error)
}

const APIGetWallets = async (): Promise<Wallet[]> => {
  const fullURL = `${APIConfig.API_URL}/wallets`
  return fetch(fullURL)
    .then((response) => response.json())
    .catch(() => [])
}

const APIToggleFavorite = async (wallet: Wallet): Promise<Wallet | null> => {
  const fullURL = `${APIConfig.API_URL}/wallets/${
    wallet.isFavorite ? 'unfavorite' : 'favorite'
  }/${wallet.id}`
  return fetch(fullURL, { method: 'PUT' })
    .then((response) => response.json())
    .catch(() => null)
}

const EtherscanAPIGetETHBalance = async (address: string): Promise<string> => {
  const fullURL = `${APIConfig.ETHERSCAN_API_URL}/api?module=account&action=balance&address=${address}&tag=latest&apikey=${APIConfig.ETHERSCAN_API_KEY}`
  return fetch(fullURL)
    .then((response) => response.json())
    .then((response) => {
      if (
        'status' in response &&
        response.status === '1' &&
        'result' in response
      ) {
        return (parseInt(response.result, 10) / 10 ** 18).toFixed(6)
      }
      return '0'
    })
    .catch(() => '0')
}

export {
  APIAddWallet,
  APIGetWallets,
  APIToggleFavorite,
  EtherscanAPIGetETHBalance,
}
