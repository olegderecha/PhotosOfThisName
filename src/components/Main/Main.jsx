// React
import React from 'react'

// Components
import { StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import PhotoList from 'components/Main/PhotoList'

// Styles
import colors from 'styles/colors'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})

export const Main = () => {
  return (
    <LinearGradient colors={colors.SCREEN_BACKGROUND} style={styles.screen}>
      <PhotoList />
    </LinearGradient>
  )
}

export default Main
