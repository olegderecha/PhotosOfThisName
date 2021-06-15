// React & Redux
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

// Components
import { StyleSheet, View, Modal, FlatList } from 'react-native'
import { Button } from 'react-native-elements'
import ContactListItem from 'components/Main/ContactListItem'

// Actions
import Actions from 'actions'

// Utils
import { uniq } from 'lodash'
import { getAllContacts } from 'utils/contactsUtils'

// Styles
import colors from 'styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    marginVertical: 50,
    backgroundColor: colors.BACKGROUND_COLOR_2,
    borderColor: colors.BORDER_COLOR_1,
    borderWidth: 1,
    borderRadius: 5,
  },
  button: {
    alignSelf: 'center',
    margin: 10,
    width: 130,
    height: 40,
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 14,
  },
})

export const ContactListModal = ({ isOpen, onSelect }) => {
  const dispatch = useDispatch()

  const { isLoading, data } = useSelector((state) => state.contactsReducer.contacts)

  const names = uniq(data.map((item) => item.givenName || item.familyName || item.middleName))

  const keyExtractor = (item) => item

  const renderItem = ({ item }) => <ContactListItem name={item} onPress={onSelect} />

  useEffect(() => {
    if (isOpen && !data.length) {
      const getContacts = async () => {
        dispatch(Actions.getContacts())
        const contacts = await getAllContacts()
        dispatch(Actions.contactsReceived(contacts))
      }

      getContacts()
    }
  }, [isOpen, data, dispatch])

  if (!isOpen) {
    return null
  }

  return (
    <Modal animationType='slide' transparent={true} visible={isOpen}>
      <View style={styles.container}>
        <FlatList
          scrollIndicatorInsets={{ right: 1 }}
          data={names}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />

        <Button
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          type='solid'
          title={'Cancel'}
          loading={isLoading}
          onPress={onSelect}
        />
      </View>
    </Modal>
  )
}

ContactListModal.propTypes = {
  isOpen: PropTypes.bool,
  onSelect: PropTypes.func,
}

export default ContactListModal
