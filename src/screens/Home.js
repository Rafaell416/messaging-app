import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class Home extends Component {
  state = {
    messages: [
      {
        id: v4(),
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg',
        username: 'Elon Musk',
        lastMessage: 'Hey, I want to hire u',
        date: new Date()
      },
      {
        id: v4(),
        avatar: 'https://amp.businessinsider.com/images/59cbc8e9c68d7b6d118b4922-750-563.jpg',
        username: 'Sergey Brin',
        lastMessage: 'I am willing to quit google x to start a business with u',
        date: new Date()
      },
      {
        id: v4(),
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Paulgraham_240x320.jpg/220px-Paulgraham_240x320.jpg',
        username: 'Paul Graham',
        lastMessage: 'I want to invest in what u have there',
        date: new Date()
      }
    ]
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>WELCOME TO Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Home