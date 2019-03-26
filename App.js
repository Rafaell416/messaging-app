import React from 'react'
import TabBar from './src/navigation/TabBar'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <TabBar />
      </Provider>
    )
  }
}