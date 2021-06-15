// React & Redux
import React, { createRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Components
import { StyleSheet, View, TextInput, Text } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import ContactListModal from 'components/Main/ContactListModal'

// Actions
import Actions from 'actions'

// Utils
import { divideByThousands } from 'utils/stringUtils'

// Styles
import colors from 'styles/colors'

const styles = StyleSheet.create({
  searchBar: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomColor: colors.BORDER_COLOR_2,
    borderBottomWidth: 1,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingRight: 25,
    height: 42,
    backgroundColor: colors.LIGHT,
    borderColor: colors.BORDER_COLOR_1,
    borderWidth: 1,
    color: colors.TEXT_PRIMARY,
    borderRadius: 5,
    fontSize: 16,
  },
  searchInputSubContainer: {
    flex: 1,
    height: 42,
  },
  close: {
    position: 'absolute',
    top: 12,
    right: 20,
  },
  pickButton: {
    width: 130,
    height: 40,
    borderRadius: 10,
  },
  searchButton: {
    marginBottom: 15,
    width: 130,
    height: 40,
    borderRadius: 10,
  },
  buttonTitle: {
    marginLeft: 10,
    fontSize: 14,
  },
  resultText: {
    color: colors.TEXT_PRIMARY,
  },
})

export const SearchBar = () => {
  const dispatch = useDispatch()

  const searchInputRef = createRef()

  const { isLoading, searchText } = useSelector((state) => state.photoReducer)
  const { total } = useSelector((state) => state.photoReducer.data)

  const [isContactListOpen, setIsContactListOpen] = useState(false)

  const handlePickContacts = () => {
    setIsContactListOpen(true)
    searchInputRef.current.blur()
  }

  const handleSelectContact = (contactName) => {
    dispatch(Actions.searchPhotosRequested({ text: contactName }))
    dispatch(Actions.setSearchText(contactName))
    setIsContactListOpen(false)
  }

  const handleSearch = () => {
    dispatch(Actions.searchPhotosRequested({ text: searchText }))
    searchInputRef.current.blur()
  }

  return (
    <View style={styles.searchBar}>
      <View style={styles.searchInputContainer}>
        <View style={styles.searchInputSubContainer}>
          <TextInput
            ref={searchInputRef}
            placeholder={'Enter search text ...'}
            placeholderTextColor={colors.TEXT_PLACEHOLDER}
            multiline={false}
            numberOfLines={1}
            textAlign='left'
            style={styles.searchInput}
            value={searchText}
            onChangeText={(value) => dispatch(Actions.setSearchText(value))}
          />

          <Icon
            style={styles.close}
            name='close'
            size={15}
            color={colors.TEXT_PRIMARY}
            onPress={() => dispatch(Actions.setSearchText(''))}
          />
        </View>

        <Button
          buttonStyle={styles.pickButton}
          titleStyle={styles.buttonTitle}
          type='solid'
          title={'Pick Contact'}
          icon={
            <Icon
              name='address-book'
              size={15}
              color={colors.LOADING_INDICATOR_LIGHT}
            />
          }
          onPress={handlePickContacts}
        />
      </View>

      <Button
        buttonStyle={styles.searchButton}
        titleStyle={styles.buttonTitle}
        type='solid'
        title={'Search'}
        disabled={!searchText.length}
        icon={
          <Icon name='search'
            size={15}
            color={colors.LOADING_INDICATOR_LIGHT}
          />
        }
        loading={isLoading}
        onPress={handleSearch}
      />

      {!!total && <Text style={styles.resultText}>{`Found ${divideByThousands(total)} photos`}</Text>}
      <ContactListModal isOpen={isContactListOpen} onSelect={handleSelectContact} />
    </View>
  )
}

export default SearchBar
