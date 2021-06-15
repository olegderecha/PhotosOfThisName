// Libs
import { Linking } from 'react-native'

export const openImageInBrowser = async (url) => {
  const canOpen = await Linking.canOpenURL(url)
  canOpen && (await Linking.openURL(url))
  return canOpen
}
