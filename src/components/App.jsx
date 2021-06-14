import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Main from 'components/Main/Main'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome'
FontAwesomeIcons.loadFont()

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})

const App = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Main />
    </SafeAreaView>
  )
}

export default App
