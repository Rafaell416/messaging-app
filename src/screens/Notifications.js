import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class Notifications extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>WELCOME TO Notifications</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980b9',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Notifications