// React
import React from 'react'

// Components
import App from 'components/App'

// Utils
import { Provider } from 'react-redux'
import store from 'app/store'

const MainApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default MainApp
