// React
import { PermissionsAndroid, Platform, Alert } from 'react-native'

// Libs
import { getAll } from 'react-native-contacts'

export const getAllContacts = async () => {
  if (Platform.OS === 'android') {
    const isGranted = await requestReadContactsPermissionAndroid()
    if (!isGranted) {
      return Alert.alert('Read Contacts Permission', 'Permission has been declined', [{ text: 'OK' }])
    }
  }

  return await getAll()
}

const requestReadContactsPermissionAndroid = async () => {
  try {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Read Contacts Permission',
      message: 'To read contacts need permission.',
    })

    return granted === PermissionsAndroid.RESULTS.GRANTED
  } catch (err) {
    console.warn(err)
  }
}
