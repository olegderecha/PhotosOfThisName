// React & Redux
import React from 'react'
import PropTypes from 'prop-types'

// Components
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

// Styles
import colors from 'styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    paddingHorizontal: 10,
    height: 36,
    backgroundColor: colors.BACKGROUND_COLOR_1,
    borderColor: colors.BORDER_COLOR_1,
    borderWidth: 1,
    borderRadius: 3,
  },
  text: {
    fontSize: 16,
    color: colors.TEXT_PRIMARY,
  },
})

export const ContactListItem = ({ name, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.text} onPress={() => onPress(name)}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  )
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  onPress: PropTypes.func,
}

export default ContactListItem
