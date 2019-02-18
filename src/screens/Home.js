import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'
import { v4 } from 'uuid'
import Header from '../components/Header'
import MessageItem from '../components/MessageItem'

class Home extends Component {
  state = {
    messages: [
      {
        id: v4(),
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Elon_Musk_2015.jpg',
        username: 'Elon Musk',
        lastMessages: ['Hey, I want to hire u'],
        date: new Date()
      },
      {
        id: v4(),
        avatar: 'https://amp.businessinsider.com/images/59cbc8e9c68d7b6d118b4922-750-563.jpg',
        username: 'Sergey Brin',
        lastMessages: ['I am willing to quit google x to start a business with u'],
        date: new Date()
      },
      {
        id: v4(),
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Paulgraham_240x320.jpg/220px-Paulgraham_240x320.jpg',
        username: 'Paul Graham',
        lastMessages: ['I want to invest in what u have there', 'Want to join next batch'],
        date: new Date()
      }
    ]
  }

  static navigationOptions = {
    header: <Header title="Home" />
  }

  _handleMessageItemPress = ( chat ) => this.props.navigation.navigate('Chat', { chat })

  _keyExtractor = (item) => item.id

  render () {
    return (
      <View style={styles.container}>
        <FlatList 
          data={ this.state.messages }
          renderItem={({ item }) => <MessageItem key={ item.di } { ...item } onPress={ this._handleMessageItemPress } />}
          keyExtractor={ this._keyExtractor }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})

export default Home