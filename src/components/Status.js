import React from 'react'
import {
  NetInfo,
  StatusBar,
  Text,
  View,
  StyleSheet
} from 'react-native'
import { Constants } from 'expo'

class Status extends React.Component {
  state = { isConnected: true }

  async componentWillMount () {
    NetInfo.isConnected.addEventListener( 
      'connectionChange', 
      this._handleChange 
    )
    const isConnected = await NetInfo.isConnected.fetch()
    this.setState({ isConnected })
  }

  _handleChange = isConnected => this.setState({ isConnected })

  componentWillUnmount () {
    NetInfo.isConnected.removeEventListener( 
      'connectionChange',
      this._handleChange
    )
  }

  render () {
    const { isConnected } = this.state
    
    const backgroundColor = isConnected ? 'transparent' : 'red'

    return (
      <React.Fragment>
        <View style={{ backgroundColor: backgroundColor, height: Constants.statusBarHeight }}></View>
        <StatusBar
          backgroundColor={ backgroundColor }
          barStyle='light-content'
          animated={false}
        />
        { isConnected ? null : (
          <View style={styles.messageContainer}>
            <Text style={styles.message}>No internet connection</Text>
          </View>
        )}
      </React.Fragment>
    )
  }
} 

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  message: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default Status