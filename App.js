import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { v4 } from 'uuid'
import Header from './src/components/Header'

export default class App extends React.Component {
  state = {
    messages: [
      {
        id: v4(),
        avatar: '',
        username: '',
        lastMessage: '',
        date: new Date()
      },
      {
        id: v4(),
        avatar: '',
        username: '',
        lastMessage: '',
        date: new Date()
      },
      {
        id: v4(),
        avatar: '',
        username: '',
        lastMessage: '',
        date: new Date()
      }
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Messaging"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})
